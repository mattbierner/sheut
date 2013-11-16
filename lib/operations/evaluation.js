/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/evaluation.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/operations/evaluation", "atum/semantics/semantics"], (function(require, exports, __o, __o0, __o1) {
    "use strict";
    var evaluateAst, evaluateInput;
    var __o = __o,
        parse = __o["parse"],
        __o0 = __o0,
        evaluateText = __o0["evaluateText"],
        __o1 = __o1,
        programBody = __o1["programBody"],
        sourceElements = __o1["sourceElements"];
    (evaluateAst = (function(root) {
        return programBody(sourceElements(root.body));
    }));
    (evaluateInput = evaluateText);
    (exports.evaluateAst = evaluateAst);
    (exports.evaluateInput = evaluateInput);
}))