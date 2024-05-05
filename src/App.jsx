import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx';
import Blogpage from './components/Blogpage.jsx';
import MostLiked from './components/MostLiked.jsx';
import MostCommented from './components/MostCommented.jsx';
import Authors from './components/Authors.jsx';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogpage/:id" element={<Blogpage/>}/>
        <Route path="/mostliked" element={<MostLiked/>}/>
        <Route path="/mostcommented" element={<MostCommented/>}/>
        <Route path="/authors" element={<Authors/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
