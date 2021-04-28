export const BlogReducer = (state, action) => {

  switch (action.type) {
    case 'LOAD_BLOGS': 
      console.log(action.payload);
      return { ...state, blogs: action.payload }
    default: 
      return state;
  }
}