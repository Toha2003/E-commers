import axios from "axios";

const productApi = axios.create({
    baseURL:'https://dummyjson.com/'
})

export default productApi