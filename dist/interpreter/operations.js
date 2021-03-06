/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/interpreter/operations.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/statement", "sheut/interpreter/debuggable"], (function(
    require, exports, __o, statement, atum_debuggable) {
    "use strict";
    var debug, debuggable, debuggableStatement, debuggableCall, abrupt = __o["abrupt"],
        bind = __o["bind"],
        callcc = __o["callcc"],
        computeContext = __o["computeContext"],
        just = __o["just"],
        next = __o["next"];
    (debug = (function(p, f) {
        return bind(computeContext, (function(ctx) {
            return next(callcc((function(k) {
                return abrupt(f(k, ctx));
            })), p);
        }));
    }));
    (debuggable = (function(p) {
        return debug(p, atum_debuggable.Debuggable.create);
    }));
    (debuggableStatement = (function(p) {
        return debug(p, atum_debuggable.StatementDebuggable.create);
    }));
    (debuggableCall = (function(p) {
        return debug(bind(p, (function(x) {
            return debug(just(x), atum_debuggable.PostCallDebuggable.create);
        })), atum_debuggable.PreCallDebuggable.create);
    }));
    (exports["debug"] = debug);
    (exports["debuggable"] = debuggable);
    (exports["debuggableStatement"] = debuggableStatement);
    (exports["debuggableCall"] = debuggableCall);
}));