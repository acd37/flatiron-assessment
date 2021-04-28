import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import BlogCard from '../Components/BlogCard'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    root: {
      marginTop: "3%",
      padding: "2%"
    },
    searchContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: 50
    },
    searchBox: {
      width: 400,
      maxWidth: '90%'
    }
  }))

function SavedBlogsList({ blogs, blogCardClickHandler }) {
    const classes = useStyles()

    const [searchTerm, setSearchTerm] = useState('');

    function createBlogCards() {
        return blogs.filter(blog => blog.favorite === true).filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase())).map(blogObject => (
        <BlogCard key={blogObject.id} blogObject={blogObject} clickHandler={blogCardClickHandler} />
        ))
    }

    return (
        <>
        <div className={classes.searchContainer}>
    
        <form  noValidate autoComplete="off">
          <TextField className={classes.searchBox} id="standard-basic" label="Search..." onChange={e => setSearchTerm(e.target.value)} />
        </form>
    
        </div>
    
        <Grid className={classes.root} container spacing={3} >
          {createBlogCards()}
        </Grid >
    
        </>
    )
}

export default SavedBlogsList