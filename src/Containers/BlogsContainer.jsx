import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogsList from '../Components/BlogsList'
import SavedBlogsList from '../Components/SavedBlogsList'

class BlogsContainer extends React.Component{

    render(){
        return (
                <Switch>
                    <Route path="/blogs/saved" render={()=> <SavedBlogsList blogs={this.props.blogs}/>} />
                    <Route path="/" render={()=> <BlogsList blogs={this.props.blogs}/>} />
                </Switch>

            )
    }
    
}


export default BlogsContainer
