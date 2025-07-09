/**
 * Convert callback function into promise
 * @param {function} fn
 * @param  {...any} args
 * @returns {Promise<any>}
 */
const callbackToPromise = (fn, ...args) => {
    return new Promise((resolve, reject) => {
        if (typeof fn !== 'function') {
            return reject(new TypeError('First parameter must be a callback function'));
        }

        // Add a custom callback to the end of the arguments list
        // This callback will handle error-first pattern and multiple/single results
        const customCallback = (err, ...results) => {
            if (err) {
                return reject(err);
            }
            // If there's only one result, resolve with it directly
            // Otherwise, resolve with an array of results
            resolve(results.length === 1 ? results[0] : results);
        };

        fn(...args, customCallback);
    });
};

module.exports = callbackToPromise;
