import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/task';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // return the tasks
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTask = async (taskData: object) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data; // return the response
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // return the response
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

export const toggleTask = async (id: number) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};
