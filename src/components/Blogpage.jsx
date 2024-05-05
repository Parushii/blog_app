import React from 'react';
import blogs from '../blog';
import { useParams } from 'react-router-dom';
import { BiSolidLike } from "react-icons/bi";

const Blogpage = () => {
  // Extract the id parameter from the URL
  const { id } = useParams();
  let found=false

  return (
    <div>
      {
      blogs.articles.map((blog)=>{

        if(blog.id===parseInt(id)){
            found=true
            return(
                <div className='flex justify-between items-center flex-col shadow-md  bg-slate-200 p-8 w-full h-screen rounded-lg'>
                        <img src={blog.author.profilePicture} alt={blog.author.name} className='h-72'/>
                        <p className='text-3xl font-bold py-2'>{blog.title}</p>
                        <p className='text-2xl py-2'><span className='font-medium text-blue-900'>Bio:</span> {blog.author.bio}</p>
                        <p className='text-2xl py-2'><span className='font-medium text-blue-900'>Bio:</span> {blog.author.bio}</p>
                        <p className='text-2xl bg-slate-300 m-4 px-10 py-8'>{blog.content}</p>
                        <div className='flex'>
                        <div className='flex items-center mr-4'>
                        <span className='mr-[5px] text-2xl mt-[2px]'>{blog.reactions.likes}</span>
                        <span 
                            className={`text-4xl cursor-pointer`} 

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
                    </div>
                    </div>
            )
        }
    })
    }
     {!found && <div>No blog found</div>}
    </div>
  );
};

export default Blogpage;
