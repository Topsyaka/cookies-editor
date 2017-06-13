import { setCookie } from './setCookie';

export function deleteCookie(name){
    setCookie(name, "", {
        expires: -1
    })
}