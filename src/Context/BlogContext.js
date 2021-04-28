import React, { createContext, useReducer } from 'react';
import { BlogReducer } from './BlogReducer';

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {

  const [blogs, dispatch] = useReducer(BlogReducer, { blogs: [] }, () => {

    return { blogs: [] };

  })

  return <BlogContext.Provider value={{ blogs, dispatch}}>{children}</BlogContext.Provider>;
}

// const BlogContext = React.createContext({ 
//   blogs: []
// });

// export default BlogContext;