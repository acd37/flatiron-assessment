import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import BlogCard from '../Components/BlogCard'
import TextField from '@material-ui/core/TextField';
import { BlogContext } from '../Context/BlogContext';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "3%",
    padding: "2%"
  },
  searchContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50
  },
  searchBox: {
    width: 400,
    maxWidth: '100%'
  }
}))

function BlogsList() {
  const classes = useStyles()

  const [searchTerm, setSearchTerm] = useState('');
  const { blogs } = useContext(BlogContext);

  function createBlogCards () {

    console.log('blogs', blogs)

    if (blogs.blogs) {
      return blogs.blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase())).map(blogObject => (
        <BlogCard key={blogObject.id} blogObject={blogObject}  />
      ))
    }
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

export default BlogsList