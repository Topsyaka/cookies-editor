import { getCookie } from './getCookie.js';

export function getAllCookies(){
    const cookies = document.cookie;
    if (cookies.length){
        return cookies.split(';').reduce(function(object,item){          
            let key = item.split('=')[0].trim();
            if(key.length){
                object[key] = getCookie(key);
            }
            return object;            
        },{})
    }
    
}