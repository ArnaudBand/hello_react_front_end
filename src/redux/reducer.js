const API_URL = 'http://localhost:3000/api/v1/greetings';

const FETCH_GREETINGS = 'FETCH_GREETINGS';

const fetchGreetings = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.message;
};

export const getGreetings = () => async (dispatch) => {
  const data = await fetchGreetings();
  dispatch({
    type: FETCH_GREETINGS,
    payload: data,
  });
};

export default function reducerGreetings(state = [], action) {
  switch (action.type) {
    case FETCH_GREETINGS:
      return { ...state, greetings: action.payload };
    default:
      return state;
  }
}
