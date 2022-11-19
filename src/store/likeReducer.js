import { INCREMENT, DECREMENT } from "./types";

const likesState = {
  likes: 0,
};

export const likesReducer = (state = likesState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, likes: state.likes + 1 };
    case DECREMENT:
      return { ...state, likes: state.likes - 1 };
    default:
      return state;
  }
};
