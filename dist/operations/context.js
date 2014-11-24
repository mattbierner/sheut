/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/operations/context.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/context/environment", "atum/semantics/expression",
    "atum/operations/environment", "atum/operations/execution_context", "atum/operations/internal_reference",
    "atum/operations/object", "atum/operations/string", "sheut/operations/reference",
    "atum/operations/type_conversion", "hamt"
], (function(require, exports, __o, __o0, __o1, environment_ops, execution_context, internal_reference, object,
    string, __o2, __o3, hamt) {
    "use strict";
    var context, environment, getEnvironmentBindings, getEnvironmentOuter, getEnvironmentBinding, location,
            stack, just = __o["just"],
        ObjectLexicalEnvironment = __o0["ObjectLexicalEnvironment"],
        getEnvironment = environment_ops["getEnvironment"],
        extract = execution_context["extract"],
        dereference = __o2["dereference"],
        getFrom = __o2["getFrom"];
    (context = execution_context.context);
    (environment = getFrom(getEnvironment));
    (getEnvironmentBindings = (function(env) {
        return dereference(env, (function(env0) {
            var record = env0["record"],
                pairs;
            return ((env0 instanceof ObjectLexicalEnvironment) ? dereference(record, (function(
                obj) {
                return just(obj.properties);
            })) : just(((pairs = hamt.pairs(record)), pairs.reduce((function(p, c) {
                (p[c[0]] = c[1]);
                return p;
            }), ({})))));
        }));
    }));
    (getEnvironmentOuter = (function(env) {
        return dereference(env, (function(z) {
            return just(z.outer);
        }));
    }));
    var x = internal_reference.getFrom,
        y = environment_ops.getEnvironmentBinding;
    (getEnvironmentBinding = (function() {
        var args = arguments;
        return x(y.apply(null, args));
    }));
    (location = extract((function(ctx) {
        var x0 = ctx.metadata;
        return x0.loc;
    })));
    (stack = extract((function(ctx) {
        var x0 = ctx.metadata;
        return x0.stack;
    })));
    (exports["context"] = context);
    (exports["environment"] = environment);
    (exports["getEnvironmentBindings"] = getEnvironmentBindings);
    (exports["getEnvironmentOuter"] = getEnvironmentOuter);
    (exports["getEnvironmentBinding"] = getEnvironmentBinding);
    (exports["location"] = location);
    (exports["stack"] = stack);
}));