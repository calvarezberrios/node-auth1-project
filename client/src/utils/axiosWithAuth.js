import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "node-auth1-mannie/api",
        withCredentials: true
    });
};

export default axiosWithAuth;