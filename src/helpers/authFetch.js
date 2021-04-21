import axios from "axios";

const authFetch = (
  route,
  { method = "GET", responseType, headers = {}, json = false, body = {}, auth = true } = {}
) => {
  return new Promise((resolve, reject) => {
    axios({
      responseType,
      url: process.env.REACT_APP_API + route,
      method: method,
      headers: {
        ...headers,
      },
      data: body,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default authFetch;
