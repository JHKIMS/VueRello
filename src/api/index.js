import axios from 'axios'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {

}

const request = (method, url, data) => {
    return axios({
        method
        url: DOMAIN + url,
        data
    })
    .then(result => result.data)
    .catch(result => {

    })
}