import httpClient  from "./client";

export const weatherforcastApi = 
{
    get: ()=> httpClient.get('/weatherforecast')
};