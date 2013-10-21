/*
 * THIS FILE IS AUTO GENERATED from 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/compute", "atum/debug/debuggable", "atum/operations/internal_reference", "atum/operations/value_reference", "atum/interpret", "atum/semantics/semantics", "atum/builtin/impl/global", "sheut/state"], (function(require, exports, parser, compute, debuggable, internal_reference, value_reference, interpret, semantics, global, __o) {
    "use strict";
    var debug, debugContext, begin, beginFromInput;
    var parser = parser,
        compute = compute,
        debuggable = debuggable,
        internal_reference = internal_reference,
        value_reference = value_reference,
        interpret = interpret,
        semantics = semantics,
        global = global,
        __o = __o,
        Debugger = __o["Debugger"]; {
            var ret = (function(x) {
                return (function() {
                    return x;
                });
            });
            var thr = (function(x) {
                return (function() {
                    throw x;
                });
            });
            var globalCtx = interpret.complete(compute.sequence(global.enterGlobal(), global.initialize(), compute.computeContext), compute.ComputeContext.empty, (function(x) {
                return (function() {
                    return x;
                });
            }), (function(x) {
                return (function() {
                    return x;
                });
            }));
            (debug = (function(p, ctx, ok, err) {
                return (function() {
                    {
                        var pok = (function(x, ctx) {
                            return (function() {
                                {
                                    var c = ok(x, ctx); {
                                        return (function() {
                                            return new(Debugger)(null, c(), ctx, true);
                                        });
                                    }
                                }
                            })();
                        }),
                            perr = (function(x, ctx) {
                                return (function() {
                                    {
                                        var c = err(x, ctx); {
                                            return (function() {
                                                return new(Debugger)(null, c(), ctx, true);
                                            });
                                        }
                                    }
                                })();
                            }); {
                                return new(Debugger)(null, (function() {
                                    return (function() {
                                        return p(ctx, pok, perr);
                                    });
                                }), ctx, false);
                        }
                    }
                })();
            }));
            (debugContext = (function(root, ctx, ok, err) {
                return debug(semantics.programBody(semantics.sourceElements(root.body)), ctx, (ok || ret), (err || thr));
            }));
            (begin = (function(ast, ok, err) {
                return debugContext(ast, globalCtx, ok, err);
            }));
            (beginFromInput = (function(text, ok, err) {
                return begin(parser.parse(text), ok, err);
            }));
    }
    (exports.debug = debug);
    (exports.debugContext = debugContext);
    (exports.begin = begin);
    (exports.beginFromInput = beginFromInput);
}))