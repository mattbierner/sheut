/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/context.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/operations/execution_context", "atum/operations/environment"], (function(require, exports, __o, execution_context, __o0) {
    "use strict";
    var context, environment, location, stack;
    var __o = __o,
        always = __o["always"],
        execution_context = execution_context,
        __o0 = __o0,
        getEnvironment = __o0["getEnvironment"];
    (context = execution_context.context);
    (environment = getEnvironment);
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