import axios from  'axios';
import 'dotenv';
import CONFIG from '../config'

class Axios {
    constructor() {}

    public async get(url: string, method: string, params?: string) {
        return axios.get(`${ method }`, {
            baseURL: url,
            params
        });
    }

    public async post(url: string, method: string, data: any) {
        return axios.post(`${ url }${ method }`, data);
    }
}

export default new Axios();