/*
 * THIS FILE IS AUTO GENERATED from 'lib/policy.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "sheut/interpreter/debuggable", "sheut/fun", "sheut/run", "sheut/operations/context"], (
    function(require, exports, debuggable, __o, __o0, context) {
        "use strict";
        var always, never, notComplete, not, and, or, all, any, breakpoint, depthGt, depthGte, depthEq, debuggerDgr,
                statementDgr, line, sameLine;
        var debuggable = debuggable,
            __o = __o,
            foldl = __o["foldl"],
            foldr = __o["foldr"],
            map = __o["map"],
            args = __o["args"],
            identity = __o["identity"],
            constant = __o["constant"],
            __o0 = __o0,
            extract = __o0["extract"],
            context = context;
        var containsLine = (function(location, line) {
            return ((location.start.line <= line) && (line <= location.end.line));
        });
        (always = (function(_, next, _0) {
            return next;
        }));
        (never = (function(_, _0, _1) {
            return null;
        }));
        var testNext = (function(f) {
            return (function(_, next) {
                return (f(next.debug) ? next : null);
            });
        });
        (notComplete = testNext((function(d) {
            return !d.complete;
        })));
        (not = (function(p) {
            return (function(f, g) {
                return (function() {
                    return f(g.apply(null, arguments));
                });
            })((function(x) {
                return !x;
            }), p);
        }));
        var binary = (function(f) {
            return (function(a, b) {
                return (function(current, next, previous) {
                    return (f(a(current, next, previous), b(current, next, previous)) ? next : null);
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
                return f(g.apply(null, arguments));
            });
        })(alla, args));
        var anya = foldl.bind(null, or, never);
        (any = (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(anya, args));
        (breakpoint = (function(current, next, previous) {
            var current = current,
                breakpoints = current["breakpoints"];
            return anya(map((function(b) {
                return breakpoints[b].test.bind(b);
            }), Object.keys(breakpoints)))(current, next, previous);
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
        (depthEq = testDepth((function(x, y) {
            return (x === y);
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
        (line = (function(line) {
            return (function(_, next) {
                return extract(next, context.location, false, (function(nextLocation) {
                    return containsLine(nextLocation, line);
                }));
            });
        }));
        (sameLine = (function(current, next) {
            return extract(current, context.location, false, (function(currentLocation) {
                return extract(next, context.location, false, (function(nextLocation) {
                    return ((currentLocation && nextLocation) && containsLine(
                        currentLocation, nextLocation.start.line));
                }));
            }));
        }));
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
        (exports.depthEq = depthEq);
        (exports.debuggerDgr = debuggerDgr);
        (exports.statementDgr = statementDgr);
        (exports.line = line);
        (exports.sameLine = sameLine);
    }))