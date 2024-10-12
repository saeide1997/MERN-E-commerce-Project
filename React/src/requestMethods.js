import axios from 'axios'
let TOKEN
const BASE_URL = 'http://localhost:7000/api/'
if(localStorage.length>2 ){ 
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken 
}else{
    TOKEN = ''
}
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})