/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/reference.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/operations/internal_reference", "atum/operations/value_reference"], (
    function(require, exports, __o, internal_reference, value_reference) {
        "use strict";
        var getFrom, getValue;
        var __o = __o,
            just = __o["just"],
            internal_reference = internal_reference,
            value_reference = value_reference;
        (getFrom = (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(value_reference.getFrom, internal_reference.getFrom));
        (getValue = (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(getFrom, just));
        (exports.getFrom = getFrom);
        (exports.getValue = getValue);
    }))