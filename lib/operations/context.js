/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/context.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/operations/execution_context", "atum/operations/environment", "sheut/operations/reference"], (function(require, exports, execution_context, __o, __o0) {
    "use strict";
    var context, environment, location, stack;
    var execution_context = execution_context,
        __o = __o,
        getEnvironment = __o["getEnvironment"],
        __o0 = __o0,
        getFrom = __o0["getFrom"];
    (context = execution_context.context);
    (environment = getFrom(getEnvironment));
    var _extractMetadata = (function(f) {
        return execution_context.extract((function(ctx) {
            return f(ctx.metadata);
        }));
    });
    (location = _extractMetadata((function(m) {
        return m.loc;
    })));
    (stack = _extractMetadata((function(m) {
        return m.stack;
    })));
    (exports.context = context);
    (exports.environment = environment);
    (exports.location = location);
    (exports.stack = stack);
}))