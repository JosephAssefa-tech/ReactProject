import axios, { AxiosError, AxiosResponse } from "axios";

import { request } from "http";
import { toast } from "react-toastify";

axios.defaults.baseURL='https://localhost:44341/api/'

const sleep=()=>new Promise(resolve=>setTimeout(resolve,1000));

const responseBody=(response:AxiosResponse)=>response.data;
axios.interceptors.response.use(async response=>
    {
        await sleep();
        return response;
    },(error:AxiosError)=>{
       const {data,status}=error.response!;
       switch(status)
       {
           case 400:
               if(data.errors)
               {
                   const modelStateErrors:string[]=[];
                 for(const key in data.errors)
                 {
                     if(data.errors[key])
                     {
                         modelStateErrors.push(data.errors[key]);
                     }
                 }
                 throw modelStateErrors.flat();
               }
               toast.error(data.title);
               break;
            case 401:
                toast.error(data.title);
                break;
            case 500:
                toast.error(data.title);
              break;
              default:
                  break;  
       }
        return Promise.reject(error.response);
    }
    )

const requests={
    get:(url:string)=>axios.get(url).then(responseBody),
    post:(url:string,body:{})=>axios.post(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    delete:(url:string)=>axios.delete(url).then(responseBody)
    
}

const Catalog={
    list:()=>requests.get('products'),
    details:(id:number)=>requests.get(`Products/${id}`)
    
}
const TestError={
    get400Error:()=>requests.get('buggy/bad-request'),
    get401Error:()=>requests.get('buggy/unauthorized'),
    get404Error:()=>requests.get('buggy/not-found'),
    get500Error:()=>requests.get('buggy/server-error'),
    getValidationError:()=>requests.get('buggy/validation-error'),
    
    
}
const Basket={
    get:()=>requests.get('basket')
 
}
const agent={
    Catalog,
    TestError,
    Basket
}
export default agent;