import { getAllCookies } from './getAllCookies.js';
import { deleteCookie } from './deleteCookie.js'; 

export function clearAllCookies(){
    const allCookies = getAllCookies();

    for (var key in allCookies){
        deleteCookie(key);
    }
}