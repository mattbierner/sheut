/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/operations/stack.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "bes/record", "atum/compute", "atum/context/environment", "atum/semantics/expression",
    "atum/operations/environment", "atum/operations/execution_context", "atum/operations/internal_reference",
    "atum/operations/object", "atum/operations/string", "sheut/operations/reference", "sheut/operations/context"
], (function(require, exports, record, compute, __o, __o0, environment_ops, execution_context, internal_reference,
    object, string, __o1, context) {
    "use strict";
    var stack, getStackFrameName, bind = compute["bind"],
        binds = compute["binds"],
        enumeration = compute["enumeration"],
        just = compute["just"],
        Frame = record.declare(null, ["func", "environment", "location"]),
        _stack = execution_context.extract((function(ctx) {
            return ctx.metadata.stack;
        }));
    (stack = binds(enumeration(_stack, context.location, context.environment), (function(stack0, loc, env) {
        var out = [],
            func = null;
        stack0.reverse()
            .forEach((function(__o2) {
                var environment = __o2["environment"],
                    location = __o2["location"],
                    callee = __o2["callee"];
                out.unshift(Frame.create(func, environment, location));
                (func = callee);
            }));
        out.unshift(Frame.create(func, env, loc));
        return just(out);
    })));
    var anon = just("[Anonymous Function]"),
        global = just("[global]");
    (getStackFrameName = (function(frame) {
        var func = frame["func"];
        return ((!func) ? global : compute.branch(object.hasProperty(func, "name"), bind(bind(object.get(
            func, "name"), string.toHost), (function(name) {
            return (name ? just(name) : anon);
        })), anon));
    }));
    (exports["stack"] = stack);
    (exports["getStackFrameName"] = getStackFrameName);
}));