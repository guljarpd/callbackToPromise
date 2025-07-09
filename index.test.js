const callbackToPromise = require('./index');

describe('callbackToPromise', () => {
    // Test case 1: Standard callback with a single result
    test('should resolve with a single result for standard callback', () => {
        const mockCallback = (cb) => setTimeout(() => cb(null, 'success'), 10);
        return callbackToPromise(mockCallback).then(data => {
            expect(data).toBe('success');
        });
    });

    // Test case 2: Standard callback with multiple results
    test('should resolve with an array of results for standard callback with multiple results', () => {
        const mockCallback = (cb) => setTimeout(() => cb(null, 'res1', 'res2'), 10);
        return callbackToPromise(mockCallback).then(data => {
            expect(data).toEqual(['res1', 'res2']);
        });
    });

    // Test case 3: Error-first callback successfully resolves
    test('should resolve for error-first callback when no error', () => {
        const mockCallback = (arg1, cb) => setTimeout(() => cb(null, `success: ${arg1}`), 10);
        return callbackToPromise(mockCallback, 'test').then(data => {
            expect(data).toBe('success: test');
        });
    });

    // Test case 4: Error-first callback rejects with an error
    test('should reject for error-first callback when error occurs', () => {
        const mockError = new Error('Test Error');
        const mockCallback = (cb) => setTimeout(() => cb(mockError), 10);
        return callbackToPromise(mockCallback).catch(error => {
            expect(error).toBe(mockError);
        });
    });

    // Test case 5: Callback with no arguments resolves (results in undefined)
    test('should resolve with undefined if callback provides no arguments beyond error', () => {
        const mockCallback = (cb) => setTimeout(() => cb(null), 10);
        return callbackToPromise(mockCallback).then(data => {
            expect(data).toBeUndefined();
        });
    });

    // Test case 6: Input is not a function
    test('should reject if the first parameter is not a function', () => {
        return callbackToPromise('not a function').catch(error => {
            expect(error).toBeInstanceOf(TypeError);
            expect(error.message).toBe('First parameter must be a callback function');
        });
    });

    // Test case 7: Callback with arguments and multiple results
    test('should resolve with multiple results when callback has arguments', () => {
        const mockCallback = (arg1, arg2, cb) => setTimeout(() => cb(null, `val1: ${arg1}`, `val2: ${arg2}`), 10);
        return callbackToPromise(mockCallback, 'hello', 'world').then(data => {
            expect(data).toEqual(['val1: hello', 'val2: world']);
        });
    });

    // Test case 8: Callback is called immediately (synchronously)
    test('should resolve correctly for a synchronous callback', () => {
        const mockCallback = (cb) => cb(null, 'sync success');
        return callbackToPromise(mockCallback).then(data => {
            expect(data).toBe('sync success');
        });
    });

    // Test case 9: Error-first callback that is called immediately (synchronously) with an error
    test('should reject correctly for a synchronous error-first callback with an error', () => {
        const mockError = new Error('Sync Test Error');
        const mockCallback = (cb) => cb(mockError);
        return callbackToPromise(mockCallback).catch(error => {
            expect(error).toBe(mockError);
        });
    });

    // Test case 10: Callback that provides undefined as a successful result
    test('should resolve with undefined if callback provides undefined as a successful result', () => {
        const mockCallback = (cb) => setTimeout(() => cb(null, undefined), 10);
        return callbackToPromise(mockCallback).then(data => {
            expect(data).toBeUndefined();
        });
    });
});
