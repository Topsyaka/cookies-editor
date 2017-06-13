export function getCookie(name){
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.trim().replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}