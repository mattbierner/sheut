/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/context.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/context/environment", "atum/operations/execution_context", "atum/operations/internal_reference", "atum/operations/environment", "sheut/operations/reference"], (function(require, exports, compute, __o, execution_context, internal_reference, environment_ops, __o0) {
    "use strict";
    var context, environment, getEnvironmentRecord, getEnvironmentOuter, getEnvironmentBinding, location, stack;
    var compute = compute,
        bind = compute["bind"],
        just = compute["just"],
        __o = __o,
        ObjectLexicalEnvironment = __o["ObjectLexicalEnvironment"],
        execution_context = execution_context,
        internal_reference = internal_reference,
        environment_ops = environment_ops,
        getEnvironment = environment_ops["getEnvironment"],
        __o0 = __o0,
        getFrom = __o0["getFrom"],
        getValue = __o0["getValue"];
    (context = execution_context.context);
    (environment = getFrom(getEnvironment));
    (getEnvironmentRecord = (function(env) {
        return bind(getValue(env), (function(env) {
            var env = env,
                record = env["record"];
            return ((env instanceof ObjectLexicalEnvironment) ? compute.bind(getValue(record), (function(obj) {
                return just(obj.properties);
            })) : just(record));
        }));
    }));
    (getEnvironmentOuter = (function(env) {
        return bind(getValue(env), (function(__o1) {
            var __o1 = __o1,
                outer = __o1["outer"];
            return just(outer);
        }));
    }));
    (getEnvironmentBinding = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(internal_reference.getFrom, environment_ops.getEnvironmentBinding));
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
    (exports.getEnvironmentRecord = getEnvironmentRecord);
    (exports.getEnvironmentOuter = getEnvironmentOuter);
    (exports.getEnvironmentBinding = getEnvironmentBinding);
    (exports.location = location);
    (exports.stack = stack);
}))