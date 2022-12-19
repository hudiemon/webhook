import axios from "axios";

const request = axios.create({
    headers: {
        'content-type': 'application/json',
    }
})

request.interceptors.response.use((response) => response.data);

export default request