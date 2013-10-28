/*
 * THIS FILE IS AUTO GENERATED from 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/compute", "atum/compute/context", "atum/interpret", "atum/semantics/semantics", "atum/builtin/impl/global", "atum/builtin/operations/global", "sheut/state"], (function(require, exports, parser, compute, __o, interpret, semantics, global, globalOps, __o0) {
    "use strict";
    var debug, debugContext, begin, beginFromInput;
    var parser = parser,
        compute = compute,
        __o = __o,
        ComputeContext = __o["ComputeContext"],
        interpret = interpret,
        semantics = semantics,
        global = global,
        globalOps = globalOps,
        __o0 = __o0,
        DebugState = __o0["DebugState"],
        Debugger = __o0["Debugger"]; {
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
                            return DebugState.create(null, ok(x, ctx), ctx, true);
                        }),
                            perr = (function(x, ctx) {
                                return DebugState.create(null, err(x, ctx), ctx, true);
                            }); {
                                return Debugger.initial.setDebug(DebugState.create(null, (function() {
                                    return interpret.exec(p, ctx, pok, perr);
                                }), ctx, false));
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