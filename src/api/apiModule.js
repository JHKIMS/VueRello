import axios from "axios";
import router from "../router/router1.js";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`);
};

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const { status } = result.response;
      if (status === UNAUTHORIZED) onUnauthorized();
      throw result.response;
    });
};

// 모든 Request를 날리기 전에 Header에 Token정보를 설정한다.
export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null;
};

const { token } = localStorage;
if (token) setAuthInHeader(token);

export const module = {
  fetch() {
    return request("get", "/boards");
  }
};

export const auth = {
  login(email, password) {
    return request('post', '/login', { email, password });
  }
};


