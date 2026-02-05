export const countReducer = (state: any, action: any) => {
//   console.log(state);
//   console.log(action);

  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
