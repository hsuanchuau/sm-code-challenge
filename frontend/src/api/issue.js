import axios from 'axios';

const API_URL = 'http://localhost:3030';

export const getIssues = async () => {
  try {
    const response = await axios.get(`${API_URL}/issues`);
    return response.data;
  } catch (error) {
    console.error('Error fetching issues:', error);
    throw error;
  }
};

export const getIssue = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/issues/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching issue with id ${id}:`, error);
    throw error;
  }
};

export const addIssue = async (issue) => {
  try {
    const response = await axios.post(`${API_URL}/issues`, issue);
    return response.data;
  } catch (error) {
    console.error('Error adding issue:', error);
    throw error;
  }
};

export const updateIssue = async (id, issue) => {
  try {
    const response = await axios.put(`${API_URL}/issues/${id}`, issue);
    return response.data;
  } catch (error) {
    console.error(`Error updating issue with id ${id}:`, error);
    throw error;
  }
};

export const deleteIssue = async (id) => {
  try {
    await axios.delete(`${API_URL}/issues/${id}`);
  } catch (error) {
    console.error(`Error deleting issue with id ${id}:`, error);
    throw error;
  }
};
