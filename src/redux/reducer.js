const API_URL = 'http://localhost:3000/api/v1/greetings';

const FETCH_GREETINGS = 'FETCH_GREETINGS';

const fetchGreetings = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.message;
};
