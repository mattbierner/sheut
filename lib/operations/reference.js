/*
 * THIS FILE IS AUTO GENERATED from 'lib/operations/reference.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/operations/internal_reference", "atum/operations/value_reference"], (function(require, exports, __o, internal_reference, value_reference) {
    "use strict";
    var getFrom, getValue;
    var __o = __o,
        always = __o["always"],
        internal_reference = internal_reference,
        value_reference = value_reference; {
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
    (exports.getFrom = getFrom);
    (exports.getValue = getValue);
}))