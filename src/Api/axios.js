import axios from "axios";

const axiosInstance = axios.create({
    // deployed version of firebase functions 
    // baseURL: "https://us-central1-clone-d72ca.cloudfunctions.net/api"
    // local instance of firebase functions
    // baseURL: "http://127.0.0.1:5001/clone-d72ca/us-central1/api"

    // deployed function of amazon server on render.com
    https://amazon-backend-project-22mt.onrender.com/
});

export { axiosInstance }