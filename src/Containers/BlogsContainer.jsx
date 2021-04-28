import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogsList from '../Components/BlogsList'
import SavedBlogsList from '../Components/SavedBlogsList'

const BlogsContainer = ({blogs}) => {
    return (
                <Switch>
                    <Route path="/blogs/saved" render={()=> <SavedBlogsList blogs={blogs}/>} />
                    <Route path="/" render={()=> <BlogsList blogs={blogs}/>} />
                </Switch>

            )
}


export default BlogsContainer
