import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Navbar from './Navbar';
import blogs from '../blog';
import { BiSolidLike } from "react-icons/bi";

const MostCommented = () => {
    const [liked, setLiked] = useState({});

    // Function to handle like button click
    const handleLike = (id) => {
        setLiked((prevLiked) => ({
            ...prevLiked,
            [id]: !prevLiked[id] // Toggle the like status
        }));
        console.log(liked)

        
    };

    const sortedBlogs = [...blogs.articles].sort((a, b) => b.comments.length - a.comments.length);
    {console.log(sortedBlogs)}

  return (
    <div>
        <Navbar/>
        <div className='mt-4 flex justify-center items-center gap-8 flex-wrap flex-col w-full'>
        <div className='text-3xl font-semibold'>Most commented blogs</div>
        {
            sortedBlogs.map((blog) => {
                return (
                    <div key={blog.id} className='flex justify-between items-start flex-col shadow-md  bg-slate-200 p-8 md:w-[50%] md:h-[45vh] rounded-lg'>
                        <img src={blog.author.profilePicture} alt={blog.author.name} className='h-32'/>
                        <p className='text-3xl font-bold py-2'>{blog.title}</p>
                        <p className='text-2xl py-2'><span className='font-medium text-blue-900'>Bio:</span> {blog.author.bio}</p>
                        <p className='text-2xl py-2'><span className='font-medium'>By ~ </span> {blog.author.name}</p>
                        <div className='flex'>
                        <div className='flex items-center mr-4'>
                        <span className='mr-[5px] text-2xl mt-[2px]'>{blog.reactions.likes}</span>
                        <span 
                            className={`text-4xl cursor-pointer ${liked[blog.id] ? 'text-blue-800' : ''}`} 
                            onClick={() => handleLike(blog.id)}
                        >
                            <BiSolidLike/>
                        </span>
                    </div>
                        <div className='flex items-center'>
                        <span className='mr-[5px] text-2xl mt-[2px]'>{blog.comments.length}</span>
                        <span 
                            className={`text-2xl`} 
                        >
                            Comments
                        </span>
                    </div>
                    <Link to={`/blogpage/${blog.id}`} className='bg-blue-400 px-4 py-2 rounded-lg ml-8 cursor-pointer'>
                                Read more
                    </Link>
                    </div>
                    </div>
                );
            }) 
        }
        </div>
    </div>
  )
}

export default MostCommented