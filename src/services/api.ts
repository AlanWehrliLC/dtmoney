import axios from "axios";

export const api = axios.create({
  baseURL: 'http://dtmoney-teal.vercel.app/api',

})
