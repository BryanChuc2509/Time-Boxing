import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000", // endopoint
    headers: {
        "Content-Type": "application/json", // tipo que devuelve la api

    }
})

export default api;