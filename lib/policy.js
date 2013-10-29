/*
 * THIS FILE IS AUTO GENERATED from 'lib/policy.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/debug/debuggable", "sheut/fun"], (function(require, exports, debuggable, __o) {
    "use strict";
    var always, never, notComplete, not, and, or, all, any, breakpoint, depthGt, depthGte, debuggerDgr, statementDgr;
    var debuggable = debuggable,
        __o = __o,
        foldl = __o["foldl"],
        foldr = __o["foldr"],
        map = __o["map"],
        args = __o["args"],
        identity = __o["identity"],
        constant = __o["constant"]; {
            (always = constant(true));
            (never = constant(false));
            var testNext = (function(f) {
                return (function(_, next) {
                    return f(next.debug);
                });
            });
            (notComplete = testNext((function(d) {
                return !d.complete;
            })));
            (not = (function(p) {
                return (function(f, g) {
                    return (function() {
                        return g(f.apply(null, arguments));
                    });
                })(p, (function(x) {
                    return !x;
                }));
            }));
            var binary = (function(f) {
                return (function(a, b) {
                    return (function(current, next) {
                        return f(a(current, next), b(current, next));
                    });
                });
            });
            (and = binary((function(x, y) {
                return (x && y);
            })));
            (or = binary((function(x, y) {
                return (x || y);
            })));
            var alla = foldl.bind(null, and, always);
            (all = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(args, alla));
            var anya = foldl.bind(null, or, never);
            (any = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(args, anya));
            (breakpoint = (function(current, next) {
                var breakpoints = current["breakpoints"];
                return anya(map((function(b) {
                    return b.test.bind(b);
                }), breakpoints))(current, next);
            }));
            var testDepth = (function(pred) {
                return (function(current, next) {
                    return pred(current.debug.depth, next.debug.depth);
                });
            });
            (depthGt = testDepth((function(x, y) {
                return (x < y);
            })));
            (depthGte = testDepth((function(x, y) {
                return (x <= y);
            })));
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
            (debuggerDgr = dgrInstanceof(debuggable.DebuggerDebuggable));
            (statementDgr = dgrInstanceof(debuggable.StatementDebuggable));
            var callDgr = or(dgrInstanceof(debuggable.PreCallDebuggable), dgrInstanceof(debuggable.PostCallDebuggable));
    }
    (exports.always = always);
    (exports.never = never);
    (exports.notComplete = notComplete);
    (exports.not = not);
    (exports.and = and);
    (exports.or = or);
    (exports.all = all);
    (exports.any = any);
    (exports.breakpoint = breakpoint);
    (exports.depthGt = depthGt);
    (exports.depthGte = depthGte);
    (exports.debuggerDgr = debuggerDgr);
    (exports.statementDgr = statementDgr);
}))