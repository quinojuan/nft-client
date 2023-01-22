const initialState = {
  urlImage: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_URL":
      return {
        ...state,
        urlImage: action.payload
      };
  }
};

export default rootReducer;
