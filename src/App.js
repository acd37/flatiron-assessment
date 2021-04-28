import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BlogsContainer from './Containers/BlogsContainer'
import Navbar from './Components/Navbar'

function App() {  
    const [blogs, setBlogs] = useState([]);

    useEffect(async () => {
        // For demonstration purposes, we mock an API call.
        const resp = await fetch('http://localhost:5000/blogs')
        const payload = await resp.json();

        setBlogs(payload);
  }, []);

    return (
    <>
      <Navbar />
      <Route path="/" render={()=> <BlogsContainer blogs={blogs}/>} />
    </>

  )
  }

export default App
