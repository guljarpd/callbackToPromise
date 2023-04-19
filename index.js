/**
 * Convert callback function into promise
 * @param {function} fn 
 * @param  {...any} args 
 * @returns
 */
const callbackToPromise = (fn, ...args) => {
    return new Promise((resolve, reject) => {
        if(typeof fn !== 'function') return reject('First parameter must be a  callabck function');
        fn(...args, (...res) => resolve([...res]));
    });
}
module.exports = callbackToPromise;
