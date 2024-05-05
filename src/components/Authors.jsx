import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Navbar from "./Navbar";
import blogs from "../blog";
import { BiSolidLike, BiSolidCommentDetail } from "react-icons/bi";


const Authors = () => {


  return (
    <div>
      <Navbar />
        <div className="flex flex-col bg-slate-200 min-h-screen w-full">
        <div className='text-3xl font-semibold text-center'>Authors</div>
      <div className="pt-4 flex justify-center items-center gap-8 flex-wrap w-full pb-16 bg-slate-200">

       
        {blogs.articles.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row justify-center items-center shadow-md mx-6 bg-white p-8 w-[50vw] xl:w-[40vw] sm:h-auto xl:h-[45vh] rounded-xl my-8"
          >
            <div className="flex justify-center items-center p-4">
              <img
                src={blog.author.authorphoto}
                alt={blog.author.name}
                className="w-[30vw]"
              />
            </div>
            <div className="flex justify-evenly items-start flex-col">
              {/* <p className="text-3xl font-bold py-2">{blog.title}</p> */}
              <div className="text-3xl my-4 font-bold py-2"><span className="text-2xl font-medium text-blue-900">Author:</span>{" "}{blog.author.name}</div>
              <div className="text-2xl my-4 py-2">
                <span className="font-medium text-blue-900">Bio:</span>{" "}
                {blog.author.bio}
              </div>
              {/* <p className="text-2xl py-2">
                <span className="font-medium">By ~ </span> {blog.author.name}
              </p> */}
              <div className="flex">
                {/* <div className="flex items-center mr-4">
                  <span className="mr-[5px] text-2xl mt-[2px]">
                    {blog.reactions.likes}
                  </span>
                  <span
                    className={`text-4xl cursor-pointer`}
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
                </div> */}
                <Link
                  to={`/blogpage/${blog.id}`}
                  className="bg-blue-500 px-4 py-2 my-4 rounded-lg text-white font-medium cursor-pointer"
                >
                  Read articles
                </Link>
              </div>
            </div>
          </div>
        ))}
            </div>

      </div>
    </div>
  );
};

export default Authors;
