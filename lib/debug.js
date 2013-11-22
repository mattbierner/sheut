/*
 * THIS FILE IS AUTO GENERATED from 'lib/debug.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/context", "atum/compute/statement", "atum/compute/program", "atum/interpret", "atum/operations/evaluation", "atum/builtin/impl/global", "atum/builtin/operations/global", "ecma/parse/parser", "sheut/semantics/semantics", "sheut/debug_state", "sheut/state"], (function(require, exports, compute, __o, statement, program, interpret, __o0, global, globalOps, __o1, semantics, __o2, __o3) {
    "use strict";
    var initialize, debug, begin, beginProgram, beginInput;
    var compute = compute,
        sequence = compute["sequence"],
        computeContext = compute["computeContext"],
        __o = __o,
        ComputeContext = __o["ComputeContext"],
        statement = statement,
        program = program,
        interpret = interpret,
        __o0 = __o0,
        evaluateText = __o0["evaluateText"],
        global = global,
        globalOps = globalOps,
        __o1 = __o1,
        parse = __o1["parse"],
        semantics = semantics,
        __o2 = __o2,
        DebugState = __o2["DebugState"],
        __o3 = __o3,
        Debugger = __o3["Debugger"];
    var memo = (function(f) {
        var val;
        return (function() {
            var args = arguments;
            if ((val !== undefined)) return val;

            (val = f.apply(null, args));
            return val;
        });
    });
    var ret = (function(x) {
        return x;
    });
    var thr = (function(x) {
        throw x;
    });
    var execute = (function(p, ctx, ok, err) {
        return Debugger.initial.setDebug(DebugState.create(null, (function() {
            return interpret.exec(p, ctx, ok, err);
        }), ctx, false));
    });
    var globalContext;
    var sm = ({
        "sourceElements": semantics.sourceElements
    });
    (initialize = memo((function(custom) {
        return interpret.exec(sequence(global.initialize(), globalOps.enterGlobal(), compute.modifyContext((function(ctx) {
            return ctx.setSemantics(sm);
        })), (custom || compute.empty), computeContext), ComputeContext.empty, (function(x) {
            (globalContext = x);
            return x;
        }), thr);
    })));
    var getGlobalContext = (function() {
        if (!globalContext) return initialize();

        return globalContext;
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
        return debug(p, getGlobalContext(), ok, err);
    }));
    (beginProgram = (function(__o4, ok, err) {
        var __o4 = __o4,
            body = __o4["body"];
        return begin(semantics.programBody(semantics.sourceElements(body)), ok, err);
    }));
    (beginInput = (function(text, ok, err) {
        return begin(evaluateText(text), ok, err);
    }));
    (exports.initialize = initialize);
    (exports.debug = debug);
    (exports.begin = begin);
    (exports.beginProgram = beginProgram);
    (exports.beginInput = beginInput);
}))