import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const getAllNotes = async () => {
  return await axios.get(`${API_BASE_URL}/notes/get-all`, getAuthConfig());
};

export const deleteNote = async (noteId) => {
  return await axios.delete(
    `${API_BASE_URL}/notes/delete/${noteId}`,
    getAuthConfig()
  );
};

export const createNote = async (noteData) => {
  return await axios.post(
    `${API_BASE_URL}/notes/create`,
    noteData,
    getAuthConfig()
  );
};

export const updateNote = async (noteId, noteData) => {
  return await axios.put(
    `${API_BASE_URL}/notes/update/${noteId}`,
    noteData,
    getAuthConfig()
  );
};
