const axios = require('axios')
const my_token  = process.env.BOT_TOKEN

const url = `https://api.telegram.org/bot${my_token}`

const getAxiosInstance = () => {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: url,
                params,
            });
        },
        post(method, data) {
            return axios({
                method: "post",
                baseURL: url,
                url: `/${method}`,
                data,
            })
        }
    }
}

module.exports = { axiosInstance : getAxiosInstance() }