/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/stack.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/compute", "atum/context/environment", "atum/semantics/expression",
    "atum/operations/environment", "atum/operations/execution_context", "atum/operations/internal_reference",
    "atum/operations/object", "atum/operations/string", "sheut/operations/reference",
    "atum/operations/type_conversion"
], (function(require, exports, record, compute, __o, __o0, environment_ops, execution_context, internal_reference,
    object, string, __o1, __o2) {
    "use strict";
    var stack, getStackFrameName;
    var record = record,
        compute = compute,
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
    var Frame = record.declare(null, ["func", "environment", "location"]);
    (stack = (function() {
        {
            var _stack = execution_context.extract((function(ctx) {
                return ctx.metadata.stack;
            }));
            return bind(_stack, (function(stack) {
                return true;
            }));
        }
    })());
    (getStackFrameName = (function() {
        {
            var anon = string.create("[Anonymous Function]");
            return (function(frame) {
                var frame = frame,
                    func = frame["func"];
                return compute.branch(object.hasProperty(func, "name"), logicalOr(compute.bind(
                    object.get(func, "name"), toString), anon), anon);
            });
        }
    })());
    (exports.stack = stack);
    (exports.getStackFrameName = getStackFrameName);
}))