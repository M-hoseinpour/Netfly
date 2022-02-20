const reducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_INFORMATION":
        return {
          ...state,
        };
      default:
        return state;
    }
  };
  
  export default reducer;