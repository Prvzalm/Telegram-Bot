const axios = require('axios')

const getAxiosInstance = (BASE_URL, headers = {}) => {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
                headers,
            });
        },
        post(method, data) {
            return axios({
                method: "post",
                baseURL: url,
                url: `/${method}`,
                data,
                headers,
            })
        }
    }
}

module.exports = { getAxiosInstance }