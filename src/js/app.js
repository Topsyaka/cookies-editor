import { setCookie } from './modules/setCookie.js';
import { getCookie } from './modules/getCookie.js';
import { deleteCookie } from './modules/deleteCookie.js';
import { getAllCookies } from './modules/getAllCookies.js';
import { clearAllCookies } from './modules/clearAllCookies.js';

module.exports = {
    "setCookie": setCookie,
    "getCookie": getCookie,
    "deleteCookie": deleteCookie,
    "getAllCookies": getAllCookies,
    "clearAllCookies": clearAllCookies
}