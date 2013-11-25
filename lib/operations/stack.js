/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/stack.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/compute", "atum/context/environment", "atum/semantics/expression",
    "atum/operations/environment", "atum/operations/execution_context", "atum/operations/internal_reference",
    "atum/operations/object", "atum/operations/string", "sheut/operations/reference", "sheut/operations/context"
], (function(require, exports, record, compute, __o, __o0, environment_ops, execution_context, internal_reference,
    object, string, __o1, context) {
    "use strict";
    var stack, getStackFrameName;
    var record = record,
        compute = compute,
        bind = compute["bind"],
        binds = compute["binds"],
        enumeration = compute["enumeration"],
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
        context = context;
    var Frame = record.declare(null, ["func", "environment", "location"]);
    (stack = (function() {
        {
            var _stack = execution_context.extract((function(ctx) {
                return ctx.metadata.stack;
            }));
            return binds(enumeration(_stack, context.location, context.environment), (function(stack,
                loc, env) {
                var out = [];
                var func = null;
                stack.reverse()
                    .forEach((function(frame) {
                        var frame = frame,
                            environment = frame["environment"],
                            location = frame["location"];
                        out.unshift(Frame.create(func, environment, location));
                        (func = frame.func);
                    }));
                out.unshift(Frame.create(func, env, loc));
                return just(out);
            }));
        }
    })());
    (getStackFrameName = (function() {
        {
            var anon = just("[Anonymous Function]"),
                global = just("[global]");
            return (function(frame) {
                var frame = frame,
                    func = frame["func"];
                return (!func ? global : compute.branch(object.hasProperty(func, "name"), bind(bind(
                    object.get(func, "name"), string.toHost), (function(name) {
                    return (name ? just(name) : anon);
                })), anon));
            });
        }
    })());
    (exports.stack = stack);
    (exports.getStackFrameName = getStackFrameName);
}))