/*
 * THIS FILE IS AUTO GENERATED from 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/tail", "atum/debug/debuggable", "atum/operations/internal_reference", "atum/operations/value_reference", "atum/value/value", "atum/value/type", "sheut/state"], (function(require, exports, compute, tail, debuggable, internal_reference, value_reference, value, type, __o) {
    "use strict";
    var step, stepWhile, finish, stepOver, stepOut, run;
    var compute = compute,
        tail = tail,
        debuggable = debuggable,
        internal_reference = internal_reference,
        value_reference = value_reference,
        value = value,
        type = type,
        __o = __o,
        Debugger = __o["Debugger"]; {
            var foldl = (function(f, z, a) {
                return Array.prototype.reduce.call(a, f, z);
            });
            var args = (function() {
                var args = arguments;
                return args;
            });
            var constant = (function(x) {
                return (function() {
                    return x;
                });
            });
            var always = constant(true);
            var never = constant(false);
            var notComplete = (function(current, next) {
                return !next.complete;
            });
            var testDepth = (function(pred) {
                return (function(current, next) {
                    return pred(next.depth, current.depth);
                });
            });
            var depthGt = testDepth((function(x, y) {
                return (x > y);
            }));
            var depthLte = testDepth((function(x, y) {
                return (x <= y);
            }));
            var testDgr = (function(pred) {
                return (function(_, next) {
                    return pred(next.dgr);
                });
            });
            var not = (function(p) {
                return (function(f, g) {
                    return (function() {
                        return g(f.apply(null, arguments));
                    });
                })(p, (function(x) {
                    return !x;
                }));
            });
            var binary = (function(f) {
                return (function(a, b) {
                    return (function(current, next) {
                        return f(a(current, next), b(current, next));
                    });
                });
            });
            var and = binary((function(x, y) {
                return (x && y);
            }));
            var or = binary((function(x, y) {
                return (x || y);
            }));
            var all = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(args, foldl.bind(null, and, always));
            var any = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(args, foldl.bind(null, or, never));
            (step = (function(d) {
                return (d.complete ? d : (function() {
                    {
                        var next = tail.trampoline(d.k(null, d.ctx)); {
                            return ((next instanceof debuggable.Debuggable) ? new(Debugger)(next, next.k, next.ctx) : next);
                        }
                    }
                })());
            }));
            (stepWhile = (function(policy, d) {
                var next = d;
                do {
                    (next = step(next));
                }
                while (policy(d, next));
                return next;
            }));
            (finish = stepWhile.bind(null, notComplete));
            (stepOver = stepWhile.bind(null, and(notComplete, depthGt)));
            (stepOut = stepWhile.bind(null, and(notComplete, depthLte)));
            (run = stepWhile.bind(null, and(notComplete, not(testDgr((function(dgr) {
                return (dgr instanceof debuggable.DebuggerDebuggable);
            }))))));
    }
    (exports.step = step);
    (exports.stepWhile = stepWhile);
    (exports.finish = finish);
    (exports.stepOver = stepOver);
    (exports.stepOut = stepOut);
    (exports.run = run);
}))