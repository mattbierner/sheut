/*
 * THIS FILE IS AUTO GENERATED from 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "sheut/debug", "sheut/state"], (function(require, exports, __o, __o0) {
    "use strict";
    var executeContext, execute, evaluateContext, evaluate, extractContext, extract, transformContext, transform;
    var __o = __o,
        debug = __o["debug"],
        executeProgram = __o["execute"],
        __o0 = __o0,
        getResult = __o0["getResult"];
    var ret = (function(x) {
        return x;
    });
    var thr = (function(x) {
        throw x;
    });
    var finish = (function() {
        var args = arguments; {
            var __o1 = require("sheut/step"),
                finish = __o1["finish"];
            return finish.apply(null, args);
        }
    });
    (executeContext = (function(dctx, p, ok, err) {
        return (function() {
            {
                var result = finish(debug(p, dctx.ctx, (function(x, ctx) {
                    return (function(d) {
                        return ok(x, ctx, d);
                    });
                }), (function(x, ctx) {
                    return (function(d) {
                        return err(x, ctx, d);
                    });
                })));
                return getResult(result)(result);
            }
        })();
    }));
    (execute = (function(d, p, ok, err) {
        return executeContext(d.debug, p, ok, err);
    }));
    (evaluateContext = (function(dctx, p, ok, err) {
        return executeContext(dctx, p, (ok || ret), (err || thr));
    }));
    (evaluate = (function(d, p, ok, err) {
        return evaluateContext(d.debug, p, ok, err);
    }));
    (extractContext = (function(dctx, p, def, ok) {
        return (function() {
            {
                var suc = (ok || ret);
                return executeContext(dctx, p, suc, (function(_, _0) {
                    return def;
                }));
            }
        })();
    }));
    (extract = (function(d, p, def, ok) {
        return extractContext(d.debug, p, def, ok);
    }));
    (transformContext = (function(dctx, p, ok, err) {
        return finish(debug(p, dctx.ctx, ok, err)).debug;
    }));
    (transform = (function(d, p, ok, err) {
        return d.setDebug(transformContext(d.debug, p, ok, err));
    }));
    (exports.executeContext = executeContext);
    (exports.execute = execute);
    (exports.evaluateContext = evaluateContext);
    (exports.evaluate = evaluate);
    (exports.extractContext = extractContext);
    (exports.extract = extract);
    (exports.transformContext = transformContext);
    (exports.transform = transform);
}))