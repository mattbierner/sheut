/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/step.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute/tail", "sheut/interpreter/debuggable", "sheut/debug_state", "sheut/fun",
    "sheut/policy"
], (function(require, exports, __o, __o0, __o1, __o2, policy) {
    "use strict";
    var next, nextWhile, step, stepNextLine, stepTo, finish, run, stepOver, stepOut, sequencea, sequence,
            trampoline = __o["trampoline"],
        createForDgr = __o1["createForDgr"],
        isComplete = __o1["isComplete"],
        foldl = __o2["foldl"],
        args = __o2["args"],
        abrupt = policy["abrupt"],
        notComplete = policy["notComplete"],
        not = policy["not"],
        and = policy["and"],
        all = policy["all"],
        any = policy["any"],
        sameLine = policy["sameLine"],
        nextContext = (function(s) {
            return (isComplete(s) ? s : createForDgr(trampoline(s.k(null, s.ctx))));
        });
    (next = (function(d) {
        return d.setDebug(nextContext(d.debug));
    }));
    (nextWhile = (function(policy0, d) {
        var n = [true, d],
            c = d,
            previous;
        do {
            (previous = c);
            (c = next(n[1]));
            (n = policy0(d, c, previous));
        }
        while (n[0]);
        return c;
    }));
    (step = nextWhile.bind(null, and(notComplete, not(policy.statementDgr))));
    (stepNextLine = nextWhile.bind(null, all(notComplete, sameLine, any(not(policy.statementDgr), policy.depthEq),
        not(abrupt))));
    (finish = nextWhile.bind(null, notComplete));
    (run = nextWhile.bind(null, all(notComplete, not(abrupt))));
    (stepOver = nextWhile.bind(null, all(notComplete, any(policy.depthGt, not(policy.statementDgr)), not(abrupt))));
    (stepOut = nextWhile.bind(null, all(notComplete, policy.depthGte, not(abrupt))));
    (sequencea = (function(steps) {
        return (function(d) {
            return foldl((function(p, c) {
                return c(p);
            }), d, steps);
        });
    }));
    var y = sequencea;
    (sequence = (function() {
        var args0 = arguments;
        return y(args.apply(null, args0));
    }));
    (exports["next"] = next);
    (exports["nextWhile"] = nextWhile);
    (exports["step"] = step);
    (exports["stepNextLine"] = stepNextLine);
    (exports["stepTo"] = stepTo);
    (exports["finish"] = finish);
    (exports["run"] = run);
    (exports["stepOver"] = stepOver);
    (exports["stepOut"] = stepOut);
    (exports["sequencea"] = sequencea);
    (exports["sequence"] = sequence);
}));