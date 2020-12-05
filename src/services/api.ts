import axios from "axios";

const baseApiURL = "https://opentdb.com/api.php";

const api = axios.create({
  baseURL: baseApiURL
});

export default api;
