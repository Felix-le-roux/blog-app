const reducer = (state, action) => {
  if (action.type === 'ADD_POST') {
    const newData = [...state.data, action.payload];
    return {
      ...state,
      data: newData,
    };
  }
  return state;
};

export default reducer;
