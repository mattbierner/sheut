/*
 * THIS FILE IS AUTO GENERATED from 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/compute", "atum/compute/context", "atum/debug/debuggable", "atum/operations/internal_reference", "atum/operations/value_reference", "atum/interpret", "atum/semantics/semantics", "atum/builtin/impl/global", "atum/builtin/operations/global", "sheut/state"], (function(require, exports, parser, compute, context, debuggable, internal_reference, value_reference, interpret, semantics, global, globalOps, __o) {
    "use strict";
    var debug, debugContext, begin, beginFromInput;
    var parser = parser,
        compute = compute,
        context = context,
        debuggable = debuggable,
        internal_reference = internal_reference,
        value_reference = value_reference,
        interpret = interpret,
        semantics = semantics,
        global = global,
        globalOps = globalOps,
        __o = __o,
        Debugger = __o["Debugger"]; {
            var ret = (function(x) {
                return x;
            });
            var thr = (function(x) {
                throw x;
            });
            var globalCtx = interpret.complete(compute.sequence(global.initialize(), globalOps.enterGlobal(), compute.computeContext), context.ComputeContext.empty, ret, thr);
            (debug = (function(p, ctx, ok, err) {
                return (function() {
                    {
                        var pok = (function(x, ctx) {
                            return new(Debugger)(null, ok(x, ctx), ctx, true);
                        }),
                            perr = (function(x, ctx) {
                                return new(Debugger)(null, err(x, ctx), ctx, true);
                            }); {
                                return new(Debugger)(null, (function() {
                                    return interpret.exec(p, ctx, pok, perr);
                                }), ctx, false);
                        }
                    }
                })();
            }));
            (debugContext = (function(root, ctx, ok, err) {
                return debug(semantics.programBody(semantics.sourceElements(root.body)), ctx, (ok || ret), (err || thr));
            }));
            (begin = (function(ast, ok, err) {
                return debugContext(ast, globalCtx, ok, err);
            }));
            (beginFromInput = (function(text, ok, err) {
                return begin(parser.parse(text), ok, err);
            }));
    }
    (exports.debug = debug);
    (exports.debugContext = debugContext);
    (exports.begin = begin);
    (exports.beginFromInput = beginFromInput);
}))