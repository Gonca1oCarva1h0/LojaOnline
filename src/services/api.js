import axios from 'axios';
const api = axios.create({ baseURL: 'https://fakestoreapi.com' });
export const getProducts = () => api.get('/products');
export const getProduct = (id) => api.get(`/products/${id}`);
export const getCategories = () => api.get('/products/categories');