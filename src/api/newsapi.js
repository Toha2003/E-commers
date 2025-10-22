import axios from "axios";

const newsApi  = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=us',
    headers:{
        'X-Api-Key':'0a0d9713c81a43629c5fcf0907ff3cf4'
    }
})

export default newsApi