/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/compute", "atum/operations/internal_reference", "atum/operations/value_reference", "atum/semantics/semantics", "sheut/run", "sheut/step"], (function(require, exports, __o, __o0, internal_reference, value_reference, __o1, __o2, __o3) {
    "use strict";
    var execute, evaluateAst, evaluateInput, getFrom, getValue;
    var __o = __o,
        parse = __o["parse"],
        __o0 = __o0,
        always = __o0["always"],
        internal_reference = internal_reference,
        value_reference = value_reference,
        __o1 = __o1,
        programBody = __o1["programBody"],
        sourceElements = __o1["sourceElements"],
        __o2 = __o2,
        debug = __o2["debug"],
        __o3 = __o3,
        finish = __o3["finish"]; {
            var ret = (function(x) {
                return x;
            });
            var thr = (function(x) {
                throw x;
            });
            (execute = (function(d, p, ok, err) {
                return finish(debug(p, d.ctx, (ok || ret), (err || thr))).k;
            }));
            (evaluateAst = (function(root) {
                return programBody(sourceElements(root.body));
            }));
            (evaluateInput = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(parse, evaluateAst));
            (getFrom = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(internal_reference.getFrom, value_reference.getFrom));
            (getValue = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(always, getFrom));
    }
    (exports.execute = execute);
    (exports.evaluateAst = evaluateAst);
    (exports.evaluateInput = evaluateInput);
    (exports.getFrom = getFrom);
    (exports.getValue = getValue);
}))