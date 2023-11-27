export function setCookie(name, value, options = {}) {
   const { expires, path, domain, secure } = options;
 
   document.cookie = `${name}=${value}` +
     (expires ? `; expires=${expires.toUTCString()}` : '') +
     (path ? `; path=${path}` : '') +
     (domain ? `; domain=${domain}` : '') +
     (secure ? '; secure' : '');
 }
 
 export function getCookie(name) {
   const cookies = document.cookie.split(';');
   for (let i = 0; i < cookies.length; i++) {
     const cookie = cookies[i].trim();
     if (cookie.startsWith(name + '=')) {
       return cookie.substring(name.length + 1);
     }
   }
   return null;
 }