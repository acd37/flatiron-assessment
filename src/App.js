import React, { useEffect, useContext, useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BlogsContainer from './Containers/BlogsContainer'
import Navbar from './Components/Navbar'
import {BlogContext} from "./Context/BlogContext";


function App() {  

    const { blogs, dispatch } = useContext(BlogContext);

    useEffect(async () => {
      const resp = await fetch('http://localhost:5000/blogs')
      const payload = await resp.json();

      dispatch({ type: "LOAD_BLOGS", payload })

    })

    return (
      
    <BlogContext.Provider value={blogs}>
      <Navbar />
      <Route path="/" render={()=> <BlogsContainer blogs={blogs}/>} />
    </BlogContext.Provider>

  )
  }

export default App
