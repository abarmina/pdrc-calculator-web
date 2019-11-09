import axios from "axios";

const provider = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 15000,
  headers: {
    Accept: "application/json, text/plain",
    "Content-Type": "application/json"
  }
});

export default class httpClient {
  static get(url = "") {
    return provider.get(url);
  }

  static delete(url = "") {
    return provider.delete(url);
  }

  static post(url = "", data = {}) {
    return provider.post(url, data);
  }

  static put(url = "", data = {}) {
    return provider.put(url, data);
  }
}
