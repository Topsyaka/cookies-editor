# Cookie-worker

> ${DESCRIPTION}

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm i -s cookies-worker
```

## Usage


#### Script tag
```html
    <script src="./node_modules/cookies-worker/cookiesWorker.js"></script>
```
adding to the global scope cookiesWorker object
### Setting cookie
```js
    cookiesWorker.setCookie('test','test',{
        expieres: 10
    })
```
First parameter - name,
Second - value,
Additional options for cookie: 
```js 
{
    expires:<number, date>,
    path: <string>,
    domain: <string>,
    secure: <boolean>
}
```
### Get cookie by name
```js
    cookiesWorker.getCookie('name');
```
### Delete cookie by name
```js
    cookiesWorker.deleteCookie('name');
```
### Get all cookies
```js
    cookiesWorker.getAllCookies();
```
return value object
### Clear all cookies
```js
    cookiesWorker.clearAllCookies();
```


[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master
