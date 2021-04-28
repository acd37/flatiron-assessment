import React, { createContext, useReducer } from 'react';
import { BlogReducer } from './BlogReducer';

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {

  const [blogs, dispatch] = useReducer(BlogReducer, { blogs: [], success: false }, () => {

    return { blogs: [], success: false };

  })

  return <BlogContext.Provider value={{ blogs, dispatch}}>{children}</BlogContext.Provider>;
}
