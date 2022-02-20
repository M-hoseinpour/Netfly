const reducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_THEME":
        return {
          ...state,
          night_theme: payload,
        };
        
      default:
        return state;
    }
  };
  
  export default reducer;
