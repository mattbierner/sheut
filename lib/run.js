/*
 * THIS FILE IS AUTO GENERATED from 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "sheut/debug", "sheut/step"], (function(require, exports, __o, __o0) {
    "use strict";
    var executeContext, execute, evaluateContext, evaluate, extractContext, extract, transformContext, transform;
    var __o = __o,
        debug = __o["debug"],
        executeProgram = __o["execute"],
        __o0 = __o0,
        finish = __o0["finish"]; {
            var ret = (function(x) {
                return x;
            });
            var thr = (function(x) {
                throw x;
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
                        }))); {
                            return result.debug.k(result);
                        }
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
            (extractContext = (function(dctx, p, def) {
                return executeContext(dctx, p, (function(x, _) {
                    return x;
                }), (function(_, _1) {
                    return def;
                }));
            }));
            (extract = (function(d, p, def) {
                return extractContext(d.debug, p, def);
            }));
            (transformContext = (function(dctx, p, ok, err) {
                return finish(debug(p, dctx.ctx, ok, err)).debug;
            }));
            (transform = (function(d, p, ok, err) {
                return d.setDebug(transformContext(d.debug, p, ok, err));
            }));
    }
    (exports.executeContext = executeContext);
    (exports.execute = execute);
    (exports.evaluateContext = evaluateContext);
    (exports.evaluate = evaluate);
    (exports.extractContext = extractContext);
    (exports.extract = extract);
    (exports.transformContext = transformContext);
    (exports.transform = transform);
}))