/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/operations/reference.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/operations/internal_reference", "atum/operations/value_reference"], (
    function(require, exports, __o, internal_reference, value_reference) {
        "use strict";
        var getFrom, getValue, just = __o["just"],
            x = internal_reference.getFrom,
            y = value_reference.getFrom;
        (getFrom = (function(z) {
            return y(x(z));
        }));
        var y0 = getFrom;
        (getValue = (function(z) {
            return y0(just(z));
        }));
        (exports["getFrom"] = getFrom);
        (exports["getValue"] = getValue);
    }));