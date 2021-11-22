import axios from 'axios';

const url = 'http://localhost:5000/main';

export const retrieveData = () => axios.get(url);
export const addData = (newPost) => axios.post(`${url}/add`, newPost);
export const updateData = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost);
export const deleteData = (id) => axios.delete(`${url}/${id}`);