/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/context.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/context/environment", "atum/semantics/expression", "atum/operations/environment", "atum/operations/execution_context", "atum/operations/internal_reference", "atum/operations/object", "atum/operations/string", "sheut/operations/reference", "atum/operations/type_conversion"], (function(require, exports, compute, __o, __o0, environment_ops, execution_context, internal_reference, object, string, __o1, __o2) {
    "use strict";
    var context, environment, getEnvironmentBindings, getEnvironmentOuter, getEnvironmentBinding, location, stack, getStackFrameName;
    var compute = compute,
        bind = compute["bind"],
        just = compute["just"],
        __o = __o,
        ObjectLexicalEnvironment = __o["ObjectLexicalEnvironment"],
        __o0 = __o0,
        logicalOr = __o0["logicalOr"],
        environment_ops = environment_ops,
        getEnvironment = environment_ops["getEnvironment"],
        execution_context = execution_context,
        internal_reference = internal_reference,
        object = object,
        string = string,
        __o1 = __o1,
        getFrom = __o1["getFrom"],
        getValue = __o1["getValue"],
        __o2 = __o2,
        toString = __o2["toString"];
    (context = execution_context.context);
    (environment = getFrom(getEnvironment));
    (getEnvironmentBindings = (function(env) {
        return bind(getValue(env), (function(env) {
            var env = env,
                record = env["record"];
            return ((env instanceof ObjectLexicalEnvironment) ? compute.bind(getValue(record), (function(obj) {
                return just(Object.keys(obj.properties));
            })) : just(Object.keys(record)));
        }));
    }));
    (getEnvironmentOuter = (function(env) {
        return bind(getValue(env), (function(__o3) {
            var __o3 = __o3,
                outer = __o3["outer"];
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
    (getStackFrameName = (function() {
        {
            var anon = string.create("[Anonymous Function]");
            return (function(frame) {
                var frame = frame,
                    func = frame["func"];
                return compute.branch(object.hasProperty(func, "name"), logicalOr(compute.bind(object.get(func, "name"), toString), anon), anon);
            });
        }
    })());
    (exports.context = context);
    (exports.environment = environment);
    (exports.getEnvironmentBindings = getEnvironmentBindings);
    (exports.getEnvironmentOuter = getEnvironmentOuter);
    (exports.getEnvironmentBinding = getEnvironmentBinding);
    (exports.location = location);
    (exports.stack = stack);
    (exports.getStackFrameName = getStackFrameName);
}))