/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/evaluation.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/semantics/semantics"], (function(require, exports, __o, __o0) {
    "use strict";
    var evaluateAst, evaluateInput;
    var __o = __o,
        parse = __o["parse"],
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