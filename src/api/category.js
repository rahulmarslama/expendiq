import httpClient  from "./client";

export const categoryApi = 
{
    get: ()=> httpClient.get('/category'),
    getById: (id)=> httpClient.get('/category/'+id),

};