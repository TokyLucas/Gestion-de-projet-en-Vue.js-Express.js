import { inject } from 'vue';
import axios from 'axios';

const BASE_URL = "http://127.0.0.1:3001";

// Création d'une instance axios pour les appels API
export default axios.create({
    baseURL: BASE_URL
})