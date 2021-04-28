export const BlogReducer = (state, action) => {

  switch (action.type) {
    case 'LOAD_BLOGS': 
      return { ...state, blogs: action.payload }
    case 'NOTIFY_SUCCESS':
      return { ...state, success: true }
    default: 
      return state;
  }
}