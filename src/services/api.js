import axios from 'axios';

const API_GATEWAY = "http://localhost:4000";

export const fetchProducts = () => axios.get(`${API_GATEWAY}/products`);
export const fetchCart = () => axios.get(`${API_GATEWAY}/cart`);
export const addToCart = (product) => axios.post(`${API_GATEWAY}/cart`, product);
