/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/fun.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var identity, args, constant, flip, concat, map, foldl, foldr, slice;
    (identity = (function(x) {
        return x;
    }));
    (args = (function() {
        var args0 = arguments;
        return args0;
    }));
    (constant = (function(x) {
        return (function() {
            return x;
        });
    }));
    (flip = (function(f) {
        return (function(x, y) {
            return f(y, x);
        });
    }));
    (concat = (function() {
        var args0 = arguments;
        return Array.prototype.concat.apply([], args0);
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
    (exports["identity"] = identity);
    (exports["args"] = args);
    (exports["constant"] = constant);
    (exports["flip"] = flip);
    (exports["concat"] = concat);
    (exports["map"] = map);
    (exports["foldl"] = foldl);
    (exports["foldr"] = foldr);
    (exports["slice"] = slice);
}));