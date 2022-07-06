export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD__PRODUCT":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
