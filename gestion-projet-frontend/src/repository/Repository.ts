import { inject } from 'vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

// Création d'une instance axios pour les appels API
export default axios.create({
    baseURL: BASE_URL
})