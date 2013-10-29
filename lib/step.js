/*
 * THIS FILE IS AUTO GENERATED from 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/tail", "atum/debug/debuggable", "sheut/debug_state", "sheut/fun", "sheut/policy"], (function(require, exports, compute, __o, debuggable, __o0, __o1, policy) {
    "use strict";
    var next, nextWhile, step, finish, run, stepOver, stepOut, sequencea, sequence;
    var compute = compute,
        __o = __o,
        trampoline = __o["trampoline"],
        debuggable = debuggable,
        __o0 = __o0,
        DebugState = __o0["DebugState"],
        __o1 = __o1,
        foldl = __o1["foldl"],
        foldr = __o1["foldr"],
        map = __o1["map"],
        args = __o1["args"],
        identity = __o1["identity"],
        constant = __o1["constant"],
        policy = policy; {
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
            (nextWhile = (function(policy, d) {
                var c = d;
                do {
                    (c = next(c));
                }
                while (policy(d, c));
                return c;
            }));
            var stepNone = identity;
            (step = nextWhile.bind(null, policy.and(policy.notComplete, policy.not(policy.statementDgr))));
            (finish = nextWhile.bind(null, policy.notComplete));
            (run = nextWhile.bind(null, policy.all(policy.notComplete, policy.not(policy.debuggerDgr), policy.not(policy.breakpoint))));
            (stepOver = nextWhile.bind(null, policy.all(policy.notComplete, policy.or(policy.depthGt, policy.not(policy.statementDgr)), policy.not(policy.debuggerDgr))));
            (stepOut = nextWhile.bind(null, policy.all(policy.notComplete, policy.depthGte, policy.not(policy.debuggerDgr))));
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