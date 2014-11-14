/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "sheut/debug", "sheut/state"], (function(require, exports, __o, __o0) {
    "use strict";
    var evaluate, extract, transform, debugInitial = __o["debugInitial"],
        getResult = __o0["getResult"],
        ret = (function(x) {
            return x;
        }),
        thr = (function(x) {
            throw x;
        }),
        finish = (function() {
            var args = arguments,
                __o1 = require("sheut/step"),
                finish0 = __o1["finish"];
            return finish0.apply(null, args);
        }),
        execute = (function(d, p, ok, err) {
            return getResult(finish(debugInitial(p, d.debug.ctx, ok, err)));
        });
    (evaluate = (function(d, p, ok, err) {
        return execute(d, p, (ok || ret), (err || thr));
    }));
    (extract = (function(d, p, def, ok) {
        return execute(d, p, (ok || ret), (function(_, _0) {
            return def;
        }));
    }));
    (transform = (function(d, p, ok, err) {
        return finish(debugInitial(p, d.debug.ctx, ok, err));
    }));
    (exports["evaluate"] = evaluate);
    (exports["extract"] = extract);
    (exports["transform"] = transform);
}));