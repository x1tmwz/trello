import customFetch from './customFetch';
const getAllAds = (params) => customFetch("/ads","GET",undefined,undefined,params);
const getAllMatchAds=(data,params)=>customFetch("/ads","POST",data,undefined,params);

export { getAllAds,getAllMatchAds}