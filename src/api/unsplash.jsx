import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6c2oQO4QLQYVQ3Gu_HX79umEiLEqmbrsatCmTe1UI2E'
    }
})