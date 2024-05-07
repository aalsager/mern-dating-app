import axios from 'axios'

const instance = axios.create({
    baseURL: "https://mern-dating-app.onrender.com"
})

export default instance