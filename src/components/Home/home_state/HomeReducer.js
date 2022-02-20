const reducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_":
        return {
          ...state,
          night_theme: payload,
        };
        
      default:
        return state;
    }
  };
  
  export default reducer;
