import axios from "axios";

export async function getUsers(currentPage, countUsers) {
  try {
    const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=${countUsers}`);
    return response;
  } 
  catch (e) {
    console.log(e);
  }
}