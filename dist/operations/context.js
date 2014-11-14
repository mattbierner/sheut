/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/operations/context.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/context/environment", "atum/semantics/expression",
    "atum/operations/environment", "atum/operations/execution_context", "atum/operations/internal_reference",
    "atum/operations/object", "atum/operations/string", "sheut/operations/reference",
    "atum/operations/type_conversion", "hamt"
], (function(require, exports, compute, __o, __o0, environment_ops, execution_context, internal_reference, object,
    string, __o1, __o2, hamt) {
    "use strict";
    var context, environment, getEnvironmentBindings, getEnvironmentOuter, getEnvironmentBinding, location,
            stack, getStackFrameName, bind = compute["bind"],
        just = compute["just"],
        ObjectLexicalEnvironment = __o["ObjectLexicalEnvironment"],
        logicalOr = __o0["logicalOr"],
        getEnvironment = environment_ops["getEnvironment"],
        getFrom = __o1["getFrom"],
        getValue = __o1["getValue"],
        toString = __o2["toString"];
    (context = execution_context.context);
    (environment = getFrom(getEnvironment));
    (getEnvironmentBindings = (function(env) {
        return bind(getValue(env), (function(env0) {
            var record = env0["record"];
            return ((env0 instanceof ObjectLexicalEnvironment) ? compute.bind(getValue(record), (
                function(obj) {
                    return just(hamt.pairs(obj.properties));
                })) : just(hamt.pairs(record)));
        }));
    }));
    (getEnvironmentOuter = (function(env) {
        return bind(getValue(env), (function(__o3) {
            var outer = __o3["outer"];
            return just(outer);
        }));
    }));
    var x = internal_reference.getFrom,
        y = environment_ops.getEnvironmentBinding;
    (getEnvironmentBinding = (function() {
        var args = arguments;
        return x(y.apply(null, args));
    }));
    (location = execution_context.extract((function(ctx) {
        var m = ctx.metadata;
        return m.loc;
    })));
    (stack = execution_context.extract((function(ctx) {
        var m = ctx.metadata;
        return m.stack;
    })));
    var anon = string.create("[Anonymous Function]");
    (getStackFrameName = (function(frame, __o3) {
        var func = __o3["func"];
        return compute.branch(object.hasProperty(func, "name"), logicalOr(compute.bind(object.get(func,
            "name"), toString), anon), anon);
    }));
    (exports["context"] = context);
    (exports["environment"] = environment);
    (exports["getEnvironmentBindings"] = getEnvironmentBindings);
    (exports["getEnvironmentOuter"] = getEnvironmentOuter);
    (exports["getEnvironmentBinding"] = getEnvironmentBinding);
    (exports["location"] = location);
    (exports["stack"] = stack);
    (exports["getStackFrameName"] = getStackFrameName);
}));