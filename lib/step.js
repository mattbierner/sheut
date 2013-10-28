/*
 * THIS FILE IS AUTO GENERATED from 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/tail", "atum/debug/debuggable", "atum/operations/internal_reference", "atum/operations/value_reference", "sheut/state"], (function(require, exports, compute, __o, debuggable, internal_reference, value_reference, __o0) {
    "use strict";
    var next, step, finish, run, stepOver, stepOut, sequencea, sequence;
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
            var foldr = (function(f, z, a) {
                return Array.prototype.reduceRight.call(a, f, z);
            });
            var map = (function(f, a) {
                return Array.prototype.map.call(a, f);
            });
            var args = (function() {
                var args = arguments;
                return args;
            });
            var identity = (function(x) {
                return x;
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
                var breakpoints = current["breakpoints"];
                return anya(map((function(b) {
                    return b.test(next);
                }), breakpoints));
            });
            var testDepth = (function(pred) {
                return (function(current, next) {
                    return pred(current.debug.depth, next.debug.depth);
                });
            });
            var depthGt = testDepth((function(x, y) {
                return (x < y);
            }));
            var depthGte = testDepth((function(x, y) {
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
            (next = (function() {
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
            })());
            var nextWhile = (function(policy, d) {
                var c = d;
                do {
                    (c = next(c));
                }
                while (policy(d, c));
                return c;
            });
            var stepNone = identity;
            (step = nextWhile.bind(null, and(notComplete, not(statementDgr))));
            (finish = nextWhile.bind(null, notComplete));
            (run = nextWhile.bind(null, all(notComplete, not(debuggerDgr), breakpoint)));
            (stepOver = nextWhile.bind(null, all(notComplete, or(depthGt, not(statementDgr)), not(debuggerDgr))));
            (stepOut = nextWhile.bind(null, all(notComplete, depthGte, not(debuggerDgr))));
            (sequencea = (function(steps) {
                return (function(d) {
                    return foldl((function(p, c) {
                        return c(p);
                    }), d, steps);
                });
            }));
            (sequence = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(args, sequencea));
    }
    (exports.next = next);
    (exports.step = step);
    (exports.finish = finish);
    (exports.run = run);
    (exports.stepOver = stepOver);
    (exports.stepOut = stepOut);
    (exports.sequencea = sequencea);
    (exports.sequence = sequence);
}))