import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const appName = import.meta.env.VITE_APP_NAME;

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: apiBaseUrl,
  params: {
    key: appName,
  },
});
