export const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_BLOGS': 
      return { blogs: action.payload }
    default: 
      return state;
  }
}