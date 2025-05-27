import axios from "axios"

const axiosClient = axios.create({
    baseURL: "https://bharat-farmer-server.onrender.com",
})

export default axiosClient;
