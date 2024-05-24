import axios from 'axios';

const baseUrl = 'https://8e29-143-44-185-160.ngrok-free.app/api'
export const getAll = () => {
    return axios.get(baseUrl + '/todo')
        .then(({ data }) => data.results )
}