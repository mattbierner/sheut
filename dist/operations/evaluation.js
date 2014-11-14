/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/operations/evaluation.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "ecma/parse/parser", "atum/operations/evaluation", "atum/semantics/semantics"], (function(
    require, exports, __o, __o0, __o1) {
    "use strict";
    var evaluateAst, evaluateInput, evaluateText = __o0["evaluateText"],
        programBody = __o1["programBody"],
        sourceElements = __o1["sourceElements"];
    (evaluateAst = (function(root) {
        return programBody(sourceElements(root.body));
    }));
    (evaluateInput = evaluateText);
    (exports["evaluateAst"] = evaluateAst);
    (exports["evaluateInput"] = evaluateInput);
}));