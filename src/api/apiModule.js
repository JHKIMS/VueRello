import axios from 'axios'
import router from '../router/router1'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
    router.push('/login')
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
    .then(result => result.data)
    .catch(result => {
        const {status} = result.response
        if(status === UNAUTHORIZED) return onUnauthorized()
        throw Error(result)
    })
}

export const module = {
    fetch(){
        return request('get', '/boards')
    }
}