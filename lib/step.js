/*
 * THIS FILE IS AUTO GENERATED from 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/debug/debuggable", "atum/operations/internal_reference", "atum/operations/value_reference", "atum/value/value", "atum/value/type", "sheut/state"], (function(require, exports, compute, debuggable, internal_reference, value_reference, value, type, __o) {
    "use strict";
    var step, stepWhile, finish, stepOver, stepOut, run;
    var compute = compute,
        debuggable = debuggable,
        internal_reference = internal_reference,
        value_reference = value_reference,
        value = value,
        type = type,
        __o = __o,
        Debugger = __o["Debugger"]; {
            (step = (function(d) {
                if (d.complete) return d;

                var next = compute.trampoline(d.k()());
                if ((next instanceof debuggable.Debuggable)) return new(Debugger)(next, next.k, next.ctx);

                return next();
            }));
            (stepWhile = (function(d, pred) {
                var next = d;
                do {
                    (next = step(next));
                }
                while (pred(d, next));
                return next;
            }));
            (finish = (function() {
                {
                    var stepToCompletion = (function(current, next) {
                        return !next.complete;
                    }); {
                        return (function(d) {
                            return stepWhile(d, stepToCompletion);
                        });
                    }
                }
            })());
            (stepOver = (function() {
                {
                    var step = (function(current, next) {
                        return (!next.complete && (next.depth > current.depth));
                    }); {
                        return (function(d) {
                            return stepWhile(d, stepOver);
                        });
                    }
                }
            })());
            (stepOut = (function() {
                {
                    var stepOut = (function(current, next) {
                        return (!next.complete && (next.depth >= current.depth));
                    }); {
                        return (function(d) {
                            return stepWhile(d, stepOut);
                        });
                    }
                }
            })());
            (run = (function(d) {
                return stepWhile(d, (function(current, next) {
                    return (!next.complete && !(next.dgr instanceof debuggable.DebuggerDebuggable));
                }));
            }));
    }
    (exports.step = step);
    (exports.stepWhile = stepWhile);
    (exports.finish = finish);
    (exports.stepOver = stepOver);
    (exports.stepOut = stepOut);
    (exports.run = run);
}))