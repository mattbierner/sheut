/*
 * THIS FILE IS AUTO GENERATED from 'lib/fun.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var identity, args, constant, compose, call, apply, flip, curry, concat, map, foldl, foldr, slice;
    (identity = (function(x) {
        return x;
    }));
    (args = (function() {
        var args = arguments;
        return args;
    }));
    (constant = (function(x) {
        return (function() {
            return x;
        });
    }));
    (compose = (function(f, g) {
        if ((!f || !g)) debugger;

        return (function() {
            var args = arguments;
            return f(g.apply(undefined, args));
        });
    }));
    (call = (function(f) {
        var args = arguments;
        return Function.prototype.call.apply(f, args);
    }));
    (apply = (function(f, args) {
        return Function.prototype.apply.apply(f, args);
    }));
    (flip = (function(f) {
        return (function(x, y) {
            return f.call(undefined, y, x);
        });
    }));
    (concat = (function() {
        var args = arguments;
        return Array.prototype.concat.apply([], args);
    }));
    (map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    }));
    (foldl = (function(f, z, a) {
        return Array.prototype.reduce.call(a, f, z);
    }));
    (foldr = (function(f, z, a) {
        return Array.prototype.reduceRight.call(a, f, z);
    }));
    (slice = (function(start, end, a) {
        return Array.prototype.slice.call(a, start, end);
    }));
    (curry = (function(f) {
        var args = arguments;
        return f.bind.apply(f, args);
    }));
    (exports.identity = identity);
    (exports.args = args);
    (exports.constant = constant);
    (exports.compose = compose);
    (exports.call = call);
    (exports.apply = apply);
    (exports.flip = flip);
    (exports.curry = curry);
    (exports.concat = concat);
    (exports.map = map);
    (exports.foldl = foldl);
    (exports.foldr = foldr);
    (exports.slice = slice);
}))