import axios from "axios";

const URL_API: string= 'http://api.weatherapi.com/v1/current.json';
const KEY_API: string= 'key=ae2c15bdffd24a7eabb21343222608&'

export const weatherApiRes = async (city: string) => {
   const { data } = await axios.get(URL_API, {
      params: {
         KEY_API,
         q: city
      }
   });
   return data;
};