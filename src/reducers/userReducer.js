//it acts like useState hook whenever the state change change it will update it

export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  return state;
};
