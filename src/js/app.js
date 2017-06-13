import { setCookie } from './modules/setCookie.js';
import { getCookie } from './modules/getCookie.js';
import { deleteCookie } from './modules/deleteCookie.js';
import { getAllCookies } from './modules/getAllCookies.js';
import { clearAllCookies } from './modules/clearAllCookies.js';

(function (global){
    global.cookiesWorker = {
        "setCookie": setCookie,
        "getCookie": getCookie,
        "deleteCookie": deleteCookie,
        "getAllCookies": getAllCookies,
        "clearAllCookies": clearAllCookies
    }
})(window);

// module.exports = {
//     "setCookie": setCookie,
//     "getCookie": getCookie,
//     "deleteCookie": deleteCookie,
//     "getAllCookies": getAllCookies,
//     "clearAllCookies": clearAllCookies
// }