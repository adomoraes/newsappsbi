// src/api/api.js

import axios from "axios"

// Criação de uma instância do Axios
const api = axios.create({
	baseURL: "https://infectologia.org.br/wp-json/wp/v2/", // URL base para as requisições
	headers: {
		"Content-Type": "application/json",
	},
})

export default api
