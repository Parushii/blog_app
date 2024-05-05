import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Navbar from "./Navbar";
import blogs from "../blog";
import { BiSolidLike, BiSolidCommentDetail } from "react-icons/bi";
import ReactPaginate from "react-paginate";

const Blog = () => {
  const [liked, setLiked] = useState({});

  // Function to handle like button click
  const handleLike = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id], // Toggle the like status
    }));
  };

  // Pagination related states
  const itemsPerPage = 4;
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = blogs.articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.articles.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.articles.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Navbar />
        <div className="flex flex-col bg-slate-200 min-h-screen w-full">
      <div className='text-3xl font-semibold text-center p-2'>All blogs</div>
      <div className="pt-4 flex justify-center items-center gap-8 flex-wrap w-full pb-16 bg-slate-200">
       
        {currentItems.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row justify-center items-center shadow-md mx-6 bg-white p-8 w-[50vw] xl:w-[40vw] sm:h-auto xl:h-[45vh] rounded-xl my-8"
          >
            <div className="flex justify-center items-center p-4">
              <img
                src={blog.author.profilePicture}
                alt={blog.author.name}
                className="h-[20vh] lg:h-[28vh]"
              />
            </div>
            <div>
              <p className="text-3xl font-bold py-2">{blog.title}</p>
              <p className="text-2xl py-2">
                <span className="font-medium text-blue-900">Bio:</span>{" "}
                {blog.author.bio}
              </p>
              <p className="text-2xl py-2">
                <span className="font-medium">By ~ </span> {blog.author.name}
              </p>
              <div className="flex">
                <div className="flex items-center mr-4">
                  <span className="mr-[5px] text-2xl mt-[2px]">
                    {blog.reactions.likes}
                  </span>
                  <span
                    className={`text-4xl cursor-pointer ${
                      liked[blog.id] ? "text-blue-800" : ""
                    }`}
                    onClick={() => handleLike(blog.id)}
                  >
                    <BiSolidLike />
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-[5px] text-2xl mt-[2px]">
                    {blog.comments.length}
                  </span>
                  <span className={`text-4xl`}>
                    <BiSolidCommentDetail />
                  </span>
                </div>
                <Link
                  to={`/blogpage/${blog.id}`}
                  className="bg-blue-400 px-4 py-2 rounded-lg ml-8 cursor-pointer"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
            </div>
        <div className="flex justify-center items-center mb-8">
        <ReactPaginate
        className="flex gap-2 text-2xl px-4"
        pageClassName="bg-white px-4 py-2 mx-4 flex justify-center items-center rounded-md"
        activeClassName="border-2 border-slate-400"
        previousClassName="text-4xl flex justify-center items-center bg-slate-500 text-white rounded-md px-4 py-2"
        nextClassName="text-4xl flex justify-center items-center bg-slate-500 text-white rounded-md px-4 py-2"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
         </div>
      </div>
    </div>
  );
};

export default Blog;
