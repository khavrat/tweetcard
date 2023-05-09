import axios from "axios";

axios.defaults.baseURL = "https://64551234a74f994b33513f31.mockapi.io";


async function fetchUsers() {
  const response = await axios.get("/users");
  return response.data;
}


export default fetchUsers;
