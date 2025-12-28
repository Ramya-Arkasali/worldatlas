import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});

//HTTP GET METHOD

// export const getCountryData = () =>
// {
//     return api.get("/all?fields=name,population,region,capitals,flags");
// };


//HTTP GET METHOD FOR INDIVIDUAL COUNTRTY NAME
// export const getCountryIndData = (name) => {
//   return api.get(
//     `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,currencies,languages,borders,flags`
//   );
// };

export const getCountryIndData = (code) => {
  return api.get(
    `/alpha/${code}?fields=cca3,name,population,region,subregion,capital,currencies,languages,borders,flags`
  );
};

export const getCountryData = () => {
  return api.get(
    "/all?fields=name,cca3,population,region,capital,flags"
  );
};
