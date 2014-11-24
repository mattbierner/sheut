/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/operations/reference.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/operations/internal_reference", "atum/operations/value_reference"], (
    function(require, exports, __o, internal_reference, value_reference) {
        "use strict";
        var getFrom, getValue, dereference, just = __o["just"],
            bind = __o["bind"],
            x = internal_reference.getFrom,
            y = value_reference.getFrom;
        (getFrom = (function(z) {
            return y(x(z));
        }));
        (getValue = (function(z) {
            return getFrom(just(z));
        }));
        (dereference = (function(ref, f) {
            return bind(getFrom(just(ref)), f);
        }));
        (exports["getFrom"] = getFrom);
        (exports["getValue"] = getValue);
        (exports["dereference"] = dereference);
    }));