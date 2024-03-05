const initState = {
  userDetails: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
