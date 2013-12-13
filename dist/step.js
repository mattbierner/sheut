/*
 * THIS FILE IS AUTO GENERATED from 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute/tail", "sheut/semantics/debug/debuggable", "sheut/debug_state", "sheut/fun",
    "sheut/policy"
], (function(require, exports, __o, __o0, __o1, __o2, policy) {
    "use strict";
    var next, nextWhile, step, stepNextLine, stepTo, finish, run, stepOver, stepOut, sequencea, sequence;
    var __o = __o,
        trampoline = __o["trampoline"],
        __o0 = __o0,
        Debuggable = __o0["Debuggable"],
        __o1 = __o1,
        DebugState = __o1["DebugState"],
        isComplete = __o1["isComplete"],
        __o2 = __o2,
        foldl = __o2["foldl"],
        args = __o2["args"],
        policy = policy,
        notComplete = policy["notComplete"],
        not = policy["not"],
        and = policy["and"],
        all = policy["all"],
        or = policy["or"],
        any = policy["any"],
        sameLine = policy["sameLine"];
    var abrupt = policy.all(not(policy.debuggerDgr), not(policy.breakpoint));
    var nextContext = (function(s) {
        return (isComplete(s) ? s : (function() {
                {
                    var c = trampoline(s.k(null, s.ctx));
                    return ((c instanceof Debuggable) ? DebugState.create(c, c.k, c.ctx, false) : c);
                }
            })
            .call(this));
    });
    (next = (function(d) {
        return d.setDebug(nextContext(d.debug));
    }));
    (nextWhile = (function(policy, d) {
        var n = d;
        var c, previous;
        do {
            (previous = c);
            (c = next(n));
            (n = policy(d, c, previous));
        }
        while (n);
        return c;
    }));
    (step = nextWhile.bind(null, and(notComplete, not(policy.statementDgr))));
    (stepNextLine = nextWhile.bind(null, all(notComplete, sameLine, any(not(policy.statementDgr), policy.depthEq),
        abrupt)));
    (finish = nextWhile.bind(null, notComplete));
    (run = nextWhile.bind(null, all(notComplete, abrupt)));
    (stepOver = nextWhile.bind(null, all(notComplete, any(policy.depthGt, not(policy.statementDgr)), abrupt)));
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
            return f(g.apply(null, arguments));
        });
    })(sequencea, args));
    (exports.next = next);
    (exports.nextWhile = nextWhile);
    (exports.step = step);
    (exports.stepNextLine = stepNextLine);
    (exports.stepTo = stepTo);
    (exports.finish = finish);
    (exports.run = run);
    (exports.stepOver = stepOver);
    (exports.stepOut = stepOut);
    (exports.sequencea = sequencea);
    (exports.sequence = sequence);
}))