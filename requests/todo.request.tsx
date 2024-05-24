import axios from "axios";

const baseUrl = "https://8e29-143-44-185-160.ngrok-free.app/api";
export const getAll = () => {
  return axios.get(baseUrl + "/todo").then(({ data }) => data.results);
};

export const addTodo = (payload) => {
  return axios.post(baseUrl + "/todo", payload).then(({ data }) => data.result);
};

export const updateTodo = (id, payload) => {
  return axios
    .patch(baseUrl + "/todo/" + id, payload)
    .then(({ data }) => data.result);
};

