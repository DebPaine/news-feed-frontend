import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.DEV ? "http://localhost:3000" : "http://some-prod-url"
})

export default instance