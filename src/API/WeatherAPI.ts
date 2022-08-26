import axios from "axios";

const URL_API: string= `http://api.weatherapi.com/v1/current.json`;
const KEY_API: string= `1123c83fa623413086e13551222608`

export const weatherApiRes = async (city: string) => {
   const { data } = await axios.get(URL_API, {
      params: {
         KEY_API,
         q: city
      }
   });
   return data;
};