/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/evaluation.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/operations/execution_context", "atum/semantics/semantics"], (function(require, exports, __o, execution_context, __o0) {
    "use strict";
    var evaluateAst, evaluateInput;
    var __o = __o,
        parse = __o["parse"],
        execution_context = execution_context,
        __o0 = __o0,
        programBody = __o0["programBody"],
        sourceElements = __o0["sourceElements"]; {
            (evaluateAst = (function(root) {
                return programBody(sourceElements(root.body));
            }));
            (evaluateInput = (function(f, g) {
                return (function() {
                    return g(f.apply(null, arguments));
                });
            })(parse, evaluateAst));
    }
    (exports.evaluateAst = evaluateAst);
    (exports.evaluateInput = evaluateInput);
}))