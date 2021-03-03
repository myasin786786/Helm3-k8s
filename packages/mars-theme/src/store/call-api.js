import axios from "axios";

export const callApi = (endpoint, method, token, payload) => {
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};
    const configaxios = {
        method,
        url: endpoint,
        data: payload,
        headers: {
            'Content-Type': 'application/json',
            ...authHeaders,
        }
    }
    return new Promise((resolve, reject) => {
        axios(configaxios).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}