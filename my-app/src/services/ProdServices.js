import axios from 'axios';

const API_URL = "http://localhost:3001/articles" 
  //url de l'api 

const getProducts = () => {
    return fetch(API_URL)
}

const getProducts2 = () => {
    return axios.get(API_URL)
}

const addProduct = product => {
    return axios.post(API_URL, product)
}

const updateProduct = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

const removeProduct = (id, data) => {
    return axios.delete(`${API_URL}/${id}`, data);
};

export default { //export de la fonction getProducts
    getProducts,
    getProducts2,
    addProduct,
    updateProduct,
    removeProduct
}