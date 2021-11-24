import axios from 'axios';

const url = 'http://localhost:5000/main';
const productionUrl = 'https://excercise-tracker-fp.herokuapp.com/main';

export const retrieveData = () => axios.get(productionUrl);
export const addData = (newPost) => axios.post(`${productionUrl}/add`, newPost);
export const updateData = (id, updatedPost) => axios.put(`${productionUrl}/${id}`, updatedPost);
export const deleteData = (id) => axios.delete(`${productionUrl}/${id}`);