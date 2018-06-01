实现一个promise

anthor @Liyuk

~~~js
// How to write promise ?
// Maybe a joke.
// Redirect to the repo named interview written by me

try {
    module.export = Promise;
} catch (e) {}

function Promise(executor) {
    var self = this


self.status = 'pending';
self.onResolvedCallback = [];
self.onRejectCallback = [];

function resolve(value) {
    if (value instanceof Promise) {
        return value.then(resolve, reject);
    }

    setTimeout(function() {
        if (self.status === 'pending') {
            self.status = 'resolved';
            self.data = value;
            for (var i = 0; i < slef.onResolvedCallback.length; i++) {
                self.onResolvedCallback[i](value);
            }
        }
    });
}

function reject(reason) {
    setTimeout(function() {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.data = reason;
            for (var i = 0; i < slef.onRejectCallback.length; i++) {
                self.onRejectCallback[i](reason);
            }
        }
    })
}

try {
    executor(resolve, reject);
} catch (e) {
    reject(e);
}


}

function resolvePromise(promise2, x, resolve, reject) {
    var then;
    var thenCalledOrThrow = false;


if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'));
}

if (x instanceof Promise) {
    if (x.status === 'pending') {
        x.then(function(v) {
            resolvePromise(promise2, v, resolve, reject);
        }, reject);
    } else {
        x.then(resolve, reject);
    }
    return;
}

if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
        then = x.then;
        if (typeof then === 'function') {
            then.call(x, function rs(y) {
                if (thenCalledOrThrow)
                    return;
                thenCalledOrThrow = true;
                return resolvePromise(promise2, y, resolve, reject);
            }, function rj(r) {
                if (thenCalledOrThrow)
                    return;
                thenCalledOrThrow = true;
                return reject(r);
            });
        } else {
            resolve(x);
        }
    } catch (e) {
        if (thenCalledOrThrow)
            return;
        thenCalledOrThrow = true;
        return reject(e);
    }
} else {
    resolve(x)
}


}

Promise.prototype.then = function(onResolved, onRejected) {
    var self = this;
    var promise2;

```
onResolved = typeof onResolved === 'function' ? onResolved : function(value) { return value };
onRejected = typeof onRejected === 'function' ? onRejected : function(reason) { throw reason };

if (self.status === 'resolved') {
    return promise2 = new Promise(function(resolve, reject) {
        try {
            var x = onResolved(self.data);
            resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
            reject(e);
        }
    })
}

if (self.status === 'rejected') {
    return promise2 = new Promise(function(resolve, reject) {
        try {
            var x = onRejected(self.data);
            resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
            reject(e);
        }
    })
}

if (self.status === 'pending') {
    self.onResolvedCallback.push(function(value) {
        try {
            var x = onResolved(self.data);
            resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
            reject(e);
        }
    });

    self.onRejectCallback.push(function(reason) {
        try {
            var x = onRejected(self.data);
            resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
            reject(e);
        }
    })
}


}

Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
}

Promise.deferred = Promise.defer = function() {
    var dfd = {};
    dfd.promise = new Promise(function(resolve, reject) {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}
~~~

