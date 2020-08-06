import axios from "axios";

const axiosWithAuth = () => {
    
    return axios.create({
        baseURL: "https://node-auth1-mannie/api"
    });
};

export default axiosWithAuth;