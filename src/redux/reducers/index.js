import { START, ZOOM } from "@/redux/actions";

const initialState = {
  started: false,
  zoom: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        started: true,
      };
    case ZOOM:
      return {
        ...state,
        zoom: 2, // Adjust the zoom level as needed
      };
    default:
      return state;
  }
};

export default rootReducer;
