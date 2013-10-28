/*
 * THIS FILE IS AUTO GENERATED from 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/compute", "atum/compute/context", "atum/interpret", "atum/semantics/semantics", "atum/builtin/impl/global", "atum/builtin/operations/global", "sheut/state"], (function(require, exports, __o, compute, __o0, interpret, semantics, global, globalOps, __o1) {
    "use strict";
    var debug, debugContext, begin, beginFromInput;
    var __o = __o,
        parse = __o["parse"],
        compute = compute,
        __o0 = __o0,
        ComputeContext = __o0["ComputeContext"],
        interpret = interpret,
        semantics = semantics,
        global = global,
        globalOps = globalOps,
        __o1 = __o1,
        DebugState = __o1["DebugState"],
        Debugger = __o1["Debugger"]; {
            var ret = (function(x) {
                return x;
            });
            var thr = (function(x) {
                throw x;
            });
            var globalCtx = interpret.complete(compute.sequence(global.initialize(), globalOps.enterGlobal(), compute.computeContext), ComputeContext.empty, ret, thr);
            (debug = (function(p, ctx, ok, err) {
                return (function() {
                    {
                        var pok = (function(x, ctx) {
                            return DebugState.create(null, (ok || ret)(x, ctx), ctx, true);
                        }),
                            perr = (function(x, ctx) {
                                return DebugState.create(null, (err || thr)(x, ctx), ctx, true);
                            }); {
                                return Debugger.initial.setDebug(DebugState.create(null, (function() {
                                    return interpret.exec(p, ctx, pok, perr);
                                }), ctx, false));
                        }
                    }
                })();
            }));
            (debugContext = (function(root, ctx, ok, err) {
                return debug(semantics.programBody(semantics.sourceElements(root.body)), ctx, ok, err);
            }));
            (begin = (function(ast, ok, err) {
                return debugContext(ast, globalCtx, ok, err);
            }));
            (beginFromInput = (function(text, ok, err) {
                return begin(parse(text), ok, err);
            }));
    }
    (exports.debug = debug);
    (exports.debugContext = debugContext);
    (exports.begin = begin);
    (exports.beginFromInput = beginFromInput);
}))