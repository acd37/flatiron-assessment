import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogsList from '../Components/BlogsList'
import SavedBlogsList from '../Components/SavedBlogsList'

const BlogsContainer = () => {
    return (
                <Switch>
                    <Route path="/blogs/saved" render={()=> <SavedBlogsList/>} />
                    <Route path="/" render={()=> <BlogsList />} />
                </Switch>

            )
}


export default BlogsContainer
