// src/utils/api.js
export const API_URL = 'https://exquisite-healing-production-1a64.up.railway.app';

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
