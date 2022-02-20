const reducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_LOADER":
        return {
          ...state,
            Loaded : payload
        };
      case "SET_LOADER_BACKDROP":
        return {
          ...state,
          backdrop_loaded : payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;