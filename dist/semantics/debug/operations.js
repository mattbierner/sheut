/*
 * THIS FILE IS AUTO GENERATED from 'lib/semantics/debug/operations.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "sheut/semantics/debug/debuggable"], (function(require, exports, compute,
    atum_debuggable) {
    "use strict";
    var debug, debuggable, debuggableStatement, debuggableCall;
    var compute = compute,
        atum_debuggable = atum_debuggable;
    (debug = (function(p, f) {
        return compute.bind(compute.computeContext, (function(ctx) {
            return compute.next(compute.callcc((function(k) {
                return compute.abrupt(f(k, ctx));
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
        return debug(compute.bind(p, (function(x) {
            return debug(compute.just(x), (function(ctx, k) {
                return new(atum_debuggable.PostCallDebuggable)(ctx, k);
            }));
        })), (function(ctx, k) {
            return new(atum_debuggable.PreCallDebuggable)(ctx, k);
        }));
    }));
    (exports.debug = debug);
    (exports.debuggable = debuggable);
    (exports.debuggableStatement = debuggableStatement);
    (exports.debuggableCall = debuggableCall);
}))