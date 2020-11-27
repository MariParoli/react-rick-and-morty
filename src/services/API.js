import axios from 'axios'

const API = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/'
})

export default API  