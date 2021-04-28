import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'
import './App.css'
import BlogsContainer from './Containers/BlogsContainer'
import Navbar from './Components/Navbar'
import {BlogContext} from "./Context/BlogContext";
import FlatironSchoolLogo from './Assets/fs_logo.png';

const useStyles = makeStyles(() => ({
  logo: {
    width: 300,
    maxWidth: '90%',
    margin: '0 auto',
    display: 'block',
    padding: 30
  }
}))

function App() {  

    const classes = useStyles();
    const { blogs, dispatch } = useContext(BlogContext);

    useEffect(async () => {
      const resp = await fetch('http://localhost:5000/blogs')
      const payload = await resp.json();

      dispatch({ type: "LOAD_BLOGS", payload })

    })

    return (
      
    <BlogContext.Provider value={blogs}>
      <Navbar />
      <img className={classes.logo} src={FlatironSchoolLogo} alt="Flatiron School Logo" />
      <Route path="/" render={()=> <BlogsContainer blogs={blogs}/>} />
    </BlogContext.Provider>

  )
  }

export default App
