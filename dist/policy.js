/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/policy.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "sheut/interpreter/debuggable", "sheut/fun", "sheut/run", "sheut/operations/context"], (
    function(require, exports, debuggable, __o, __o0, context) {
        "use strict";
        var test, always, never, notComplete, not, and, or, all, any, breakpoint, depthGt, depthGte, depthEq,
                debuggerDgr, statementDgr, abrupt, line, sameLine, foldl = __o["foldl"],
            map = __o["map"],
            args = __o["args"],
            extract = __o0["extract"];
        (test = (function(pred) {
            return (function(start, current, previous) {
                return [pred(start, current, previous), current];
            });
        }));
        (always = (function(_, current, _0) {
            return [true, current];
        }));
        (never = (function(_, current, _0) {
            return [false, current];
        }));
        (notComplete = (function(start, current, previous) {
            var d;
            return [((d = current.debug), (!d.complete)), current];
        }));
        (not = (function(p) {
            return (function(start, current, next) {
                var x = p(start, current, next);
                return [(!x[0]), x[1]];
            });
        }));
        (and = (function(a, b) {
            return (function(start, current, previous) {
                var x = a(start, current, previous),
                    y = b(start, current, previous),
                    x0, y0;
                return [((x0 = x[0]), (y0 = y[0]), (x0 && y0)), current];
            });
        }));
        (or = (function(a, b) {
            return (function(start, current, previous) {
                var x = a(start, current, previous),
                    y = b(start, current, previous),
                    x0, y0;
                return [((x0 = x[0]), (y0 = y[0]), (x0 || y0)), current];
            });
        }));
        var alla = foldl.bind(null, and, always);
        (all = (function() {
            var args0 = arguments;
            return alla(args.apply(null, args0));
        }));
        var anya = foldl.bind(null, or, never);
        (any = (function() {
            var args0 = arguments;
            return anya(args.apply(null, args0));
        }));
        (breakpoint = (function(current, next, previous) {
            var breakpoints = current["breakpoints"];
            return anya(map((function(b) {
                return breakpoints[b].test.bind(b);
            }), Object.keys(breakpoints)))(current, next, previous);
        }));
        (depthGt = (function(start, current, previous) {
            var x, y;
            return [((x = start.debug.depth), (y = current.debug.depth), (x < y)), current];
        }));
        (depthGte = (function(start, current, previous) {
            var x, y;
            return [((x = start.debug.depth), (y = current.debug.depth), (x <= y)), current];
        }));
        (depthEq = (function(start, current, previous) {
            var x, y;
            return [((x = start.debug.depth), (y = current.debug.depth), (x === y)), current];
        }));
        var kind = debuggable.DebuggerDebuggable;
        (debuggerDgr = (function(start, current, previous) {
            var dgr;
            return [((dgr = current.debug.dgr), (dgr instanceof kind)), current];
        }));
        var kind0 = debuggable.StatementDebuggable;
        (statementDgr = (function(start, current, previous) {
            var dgr;
            return [((dgr = current.debug.dgr), (dgr instanceof kind0)), current];
        }));
        var args0 = [debuggerDgr, breakpoint];
        (abrupt = anya(args.apply(null, args0)));
        (line = (function(line0) {
            return (function(start, current, previous) {
                return [extract(current, context.location, false, (function(nextLocation) {
                    return ((nextLocation.start.line <= line0) && (line0 <= nextLocation.end
                        .line));
                })), current];
            });
        }));
        (sameLine = (function(start, current, previous) {
            return [extract(start, context.location, false, (function(currentLocation) {
                return extract(current, context.location, false, (function(nextLocation) {
                    var line0;
                    return ((currentLocation && nextLocation) && ((line0 = nextLocation
                        .start.line), ((currentLocation.start.line <= line0) &&
                        (line0 <= currentLocation.end.line))));
                }));
            })), current];
        }));
        (exports["test"] = test);
        (exports["always"] = always);
        (exports["never"] = never);
        (exports["notComplete"] = notComplete);
        (exports["not"] = not);
        (exports["and"] = and);
        (exports["or"] = or);
        (exports["all"] = all);
        (exports["any"] = any);
        (exports["breakpoint"] = breakpoint);
        (exports["depthGt"] = depthGt);
        (exports["depthGte"] = depthGte);
        (exports["depthEq"] = depthEq);
        (exports["debuggerDgr"] = debuggerDgr);
        (exports["statementDgr"] = statementDgr);
        (exports["abrupt"] = abrupt);
        (exports["line"] = line);
        (exports["sameLine"] = sameLine);
    }));