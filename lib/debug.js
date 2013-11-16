/*
 * THIS FILE IS AUTO GENERATED from 'lib/debug.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/context", "atum/interpret", "atum/operations/evaluation", "atum/semantics/semantics", "atum/builtin/impl/global", "atum/builtin/operations/global", "sheut/debug_state", "sheut/state"], (function(require, exports, __o, __o0, interpret, __o1, semantics, global, globalOps, __o2, __o3) {
    "use strict";
    var debug, begin, beginProgram, beginInput;
    var __o = __o,
        sequence = __o["sequence"],
        computeContext = __o["computeContext"],
        __o0 = __o0,
        ComputeContext = __o0["ComputeContext"],
        interpret = interpret,
        __o1 = __o1,
        evaluateModuleText = __o1["evaluateModuleText"],
        semantics = semantics,
        global = global,
        globalOps = globalOps,
        __o2 = __o2,
        DebugState = __o2["DebugState"],
        __o3 = __o3,
        Debugger = __o3["Debugger"];
    var ret = (function(x) {
        return x;
    });
    var thr = (function(x) {
        throw x;
    });
    var globalCtx = interpret.complete(sequence(global.initialize(), globalOps.enterGlobal(), computeContext), ComputeContext.empty, ret, thr);
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
                    });
                return execute(p, ctx, pok, perr);
            }
        })();
    }));
    (begin = (function(p, ok, err) {
        return debug(p, globalCtx, ok, err);
    }));
    (beginProgram = (function(__o4, ok, err) {
        var __o4 = __o4,
            body = __o4["body"];
        return begin(semantics.programBody(semantics.sourceElements(body)), ok, err);
    }));
    (beginInput = (function(text, ok, err) {
        return begin(evaluateModuleText(text), ok, err);
    }));
    (exports.debug = debug);
    (exports.begin = begin);
    (exports.beginProgram = beginProgram);
    (exports.beginInput = beginInput);
}))