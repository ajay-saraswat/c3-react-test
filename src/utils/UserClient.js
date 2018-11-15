import axios from 'axios';

// UserClient - wrapper for HTTP client
class UserClient {
    constructor(baseURL = 'https://reqres.in/api/') {
        if (!UserClient.instance) {
            this.defaultOptions = {
                baseURL,
            };
            UserClient.instance = this;
        }
        return UserClient.instance;
    }

    get(url) {
        return axios.get(url, { ...this.defaultOptions });
    }

    post(url, params = {}) {
        return axios.post(url, params, { ...this.defaultOptions });
    }

    patch(url, params = {}) {
        return axios.patch(url, params, { ...this.defaultOptions });
    }

    put(url, params = {}) {
        return axios.put(url, params, { ...this.defaultOptions });
    }

    delete(url) {
        return axios.delete(url, { ...this.defaultOptions });
    }
}

const instance = new UserClient();

export default instance;
