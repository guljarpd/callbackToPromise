# callback-to-promises

A simple utility to convert Node.js-style callback functions (error-first callbacks) into Promise-based functions. This makes it easy to use legacy callback APIs with modern async/await syntax.

---

## Why use callback-to-promises?

Many Node.js APIs and libraries use callbacks to handle asynchronous results, but Promises and async/await are now the preferred patterns for writing clean, readable asynchronous code. This package helps you bridge that gap effortlessly.

- Converts standard callback functions `(err, result) => {}` into Promise-returning functions
- Minimal and zero dependencies
- Easy to integrate with existing callback-based code

---

## Installation

```bash
npm install callback-to-promises
```

## Examples

Import callbackToPromise

```js
    const callbackToPromise = require('callback-to-promises');
```

Then...

```js 
    const callbackToPromise = require('callback-to-promises');

    function addNumbers(callback) {
        return callback(null, 5+6);
    }

    callbackToPromise(addNumbers).then(res => {
        console.log('Res=>', res);
    }).catch(err => {
        console.log('Err=>', err);
    });
```

Example #2

```js
    const callbackToPromise = require('callback-to-promises');

    function addNumbers(a, b, callback) {
        return callback(null, a+b);
    }


    callbackToPromise(addNumbers, 5, 6).then(res => {
        console.log('Res=>', res);
    }).catch(err => {
        console.log('Err=>', err);
    });

```

Example #3 Async/Await

```js
    const callbackToPromise = require('callback-to-promises');

    function addNumbers(data, callback) {
        return callback(null, data.a + data.b);
    }

    const myAsyncFunction = async () => {
        try {
            const dataObj = {
                a: 5,
                b: 6
            }
            const res = await callbackToPromise(addNumbers, dataObj);
            console.log('Res=>', res);
        } catch (err) {
            console.log('Err=>', err);
        }
    }
```
