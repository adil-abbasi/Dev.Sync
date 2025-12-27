// src/utils/api.js
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';



if (!API_URL) {
  throw new Error("Backend URL is not set. Check your .env file.");
}

export const fetchAPI = async (endpoint, options) => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('API Error:', err);
    throw new Error('Network or server error');
  }
};
