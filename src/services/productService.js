import axios from 'axios';

export function getOne() {
    return axios.get(`/api/getproduct:id`).then( res => {
        return res.data
    })
}
