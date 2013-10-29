/*
 * THIS FILE IS AUTO GENERATED from 'lib/debug.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/compute", "atum/compute/context", "atum/interpret", "atum/semantics/semantics", "atum/builtin/impl/global", "atum/builtin/operations/global", "sheut/state"], (function(require, exports, __o, compute, __o0, interpret, semantics, global, globalOps, __o1) {
    "use strict";
    var debug, begin, beginProgram, beginInput;
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
            var execute = (function(p, ctx, ok, err) {
                return Debugger.initial.setDebug(DebugState.create(null, (function() {
                    return interpret.exec(p, ctx, ok, err);
                }), ctx, false));
            });
            (debug = (function(p, ctx, ok, err) {
                return (function() {
                    {
                        var suc = (ok || ret),
                            fail = (err || thr),
                            pok = (function(x, ctx) {
                                return DebugState.create(null, suc(x, ctx), ctx, true);
                            }),
                            perr = (function(x, ctx) {
                                return DebugState.create(null, fail(x, ctx), ctx, true);
                            }); {
                                return execute(p, ctx, pok, perr);
                        }
                    }
                })();
            }));
            (begin = (function(p, ok, err) {
                return debug(p, globalCtx, ok, err);
            }));
            (beginProgram = (function(root, ok, err) {
                return begin(semantics.programBody(semantics.sourceElements(root.body)), ok, err);
            }));
            (beginInput = (function(text, ok, err) {
                return beginProgram(parse(text), ok, err);
            }));
    }
    (exports.debug = debug);
    (exports.begin = begin);
    (exports.beginProgram = beginProgram);
    (exports.beginInput = beginInput);
}))