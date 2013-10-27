/*
 * THIS FILE IS AUTO GENERATED from 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/tail", "atum/debug/debuggable", "atum/operations/internal_reference", "atum/operations/value_reference", "sheut/state"], (function(require, exports, compute, __o, debuggable, internal_reference, value_reference, __o0) {
    "use strict";
    var step, finish, stepOver, stepOut, run;
    var compute = compute,
        __o = __o,
        trampoline = __o["trampoline"],
        debuggable = debuggable,
        internal_reference = internal_reference,
        value_reference = value_reference,
        __o0 = __o0,
        DebugState = __o0["DebugState"],
        Debugger = __o0["Debugger"]; {
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
            var testNext = (function(f) {
                return (function(_, next) {
                    return f(next.debug);
                });
            });
            var notComplete = testNext((function(d) {
                return !d.complete;
            }));
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
            var alla = foldl.bind(null, and, always);
            var all = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(args, alla);
            var anya = foldl.bind(null, or, never);
            var any = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(args, anya);
            var breakpoint = (function(current, next) {
                for (var i = 0;
                    (i < current.breakpoints.length); + +i)
                    if (current.breakpoints[i].test(next)) return true;


                return false;
            });
            var testDepth = (function(pred) {
                return (function(current, next) {
                    return pred(next.debug.depth, current.debug.depth);
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
                    return pred(next.debug.dgr);
                });
            });
            var dgrInstanceof = (function(kind) {
                return testDgr((function(dgr) {
                    return (dgr instanceof kind);
                }));
            });
            var debuggerDgr = dgrInstanceof(debuggable.DebuggerDebuggable);
            var statementDgr = dgrInstanceof(debuggable.StatementDebuggable);
            var callDgr = or(dgrInstanceof(debuggable.PreCallDebuggable), dgrInstanceof(debuggable.PostCallDebuggable));
            var next = (function() {
                {
                    var next = (function(s) {
                        return (s.complete ? s : (function() {
                            {
                                var c = trampoline(s.k(null, s.ctx)); {
                                    return ((c instanceof debuggable.Debuggable) ? DebugState.create(c, c.k, c.ctx) : c);
                                }
                            }
                        })());
                    }); {
                        return (function(d) {
                            return d.setDebug(next(d.debug));
                        });
                    }
                }
            })();
            var nextWhile = (function(policy, d) {
                var c = d;
                do {
                    (c = next(c));
                }
                while (policy(d, c));
                return c;
            });
            (step = nextWhile.bind(null, and(notComplete, not(statementDgr))));
            (finish = nextWhile.bind(null, notComplete));
            (run = nextWhile.bind(null, and(notComplete, not(debuggerDgr), breakpoint)));
            (stepOver = nextWhile.bind(null, all(notComplete, depthGt, not(dgrInstanceof(debuggable.PostCallDebuggable)))));
            (stepOut = nextWhile.bind(null, and(notComplete, depthLte)));
    }
    (exports.step = step);
    (exports.finish = finish);
    (exports.stepOver = stepOver);
    (exports.stepOut = stepOut);
    (exports.run = run);
}))