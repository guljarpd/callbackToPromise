# Callback To Promise

### Convert your callabck function into promise.

## Installation

`npm i callback-to-promises`

## Examples

Import callbackToPromise

```
    const callbackToPromise = require('callback-to-promises');
```

Then...

``` 
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

```
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

```
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
