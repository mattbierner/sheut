/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/compute", "atum/operations/internal_reference", "atum/operations/value_reference", "atum/semantics/semantics", "sheut/run", "sheut/step"], (function(require, exports, parser, compute, internal_reference, value_reference, semantics, __o, step) {
    "use strict";
    var evaluate, evaluateAst, evaluateInput, getValue;
    var parser = parser,
        compute = compute,
        internal_reference = internal_reference,
        value_reference = value_reference,
        semantics = semantics,
        __o = __o,
        debug = __o["debug"],
        step = step; {
            var ret = (function(x) {
                return (function() {
                    return x;
                });
            });
            var thr = (function(x) {
                return (function() {
                    throw x;
                });
            });
            (evaluate = (function(d, p, ok, err) {
                return step.finish(debug(p, d.ctx, (ok || ret), (err || thr))).k;
            }));
            (evaluateAst = (function(d, root, ok, err) {
                return evaluate(d, semantics.programBody(semantics.sourceElements(root.body)), ok, err);
            }));
            (evaluateInput = (function(d, input, ok, err) {
                return evaluateAst(d, parser.parse(input), ok, err);
            }));
            (getValue = (function(d, ref, ok, err) {
                return evaluate(value_reference.getFrom(internal_reference.getValue(ref)), ok, err);
            }));
    }
    (exports.evaluate = evaluate);
    (exports.evaluateAst = evaluateAst);
    (exports.evaluateInput = evaluateInput);
    (exports.getValue = getValue);
}))