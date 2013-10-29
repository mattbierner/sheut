/*
 * THIS FILE IS AUTO GENERATED from 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute/tail", "atum/debug/debuggable", "sheut/debug_state", "sheut/fun", "sheut/policy"], (function(require, exports, __o, __o0, __o1, __o2, policy) {
    "use strict";
    var next, nextWhile, step, finish, run, stepOver, stepOut, sequencea, sequence;
    var __o = __o,
        trampoline = __o["trampoline"],
        __o0 = __o0,
        Debuggable = __o0["Debuggable"],
        __o1 = __o1,
        DebugState = __o1["DebugState"],
        __o2 = __o2,
        foldl = __o2["foldl"],
        args = __o2["args"],
        policy = policy,
        notComplete = policy["notComplete"],
        not = policy["not"],
        and = policy["and"],
        all = policy["all"],
        or = policy["or"],
        any = policy["any"]; {
            var abrupt = policy.all(not(policy.debuggerDgr), not(policy.breakpoint));
            (next = (function() {
                {
                    var next = (function(s) {
                        return (s.complete ? s : (function() {
                            {
                                var c = trampoline(s.k(null, s.ctx)); {
                                    return ((c instanceof Debuggable) ? DebugState.create(c, c.k, c.ctx) : c);
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
            (nextWhile = (function(policy, d) {
                var c = d;
                do {
                    (c = next(c));
                }
                while (policy(d, c));
                return c;
            }));
            (step = nextWhile.bind(null, and(notComplete, not(policy.statementDgr))));
            (finish = nextWhile.bind(null, notComplete));
            (run = nextWhile.bind(null, all(notComplete, abrupt)));
            (stepOver = nextWhile.bind(null, all(notComplete, or(policy.depthGt, not(policy.statementDgr)), abrupt)));
            (stepOut = nextWhile.bind(null, all(notComplete, policy.depthGte, abrupt)));
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
    (exports.nextWhile = nextWhile);
    (exports.step = step);
    (exports.finish = finish);
    (exports.run = run);
    (exports.stepOver = stepOver);
    (exports.stepOut = stepOut);
    (exports.sequencea = sequencea);
    (exports.sequence = sequence);
}))