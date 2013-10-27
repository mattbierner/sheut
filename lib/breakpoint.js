/*
 * THIS FILE IS AUTO GENERATED from 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/debug/debuggable", "atum/operations/type_conversion", "sheut/operations"], (function(require, exports, record, debuggable, __o, operations) {
    "use strict";
    var Breakpoint;
    var record = record,
        debuggable = debuggable,
        __o = __o,
        toBoolean = __o["toBoolean"],
        operations = operations; {
            (Breakpoint = record.declare(null, ["id", "test"]));
            var createUnconditionalBreakpoint = (function(id, loc) {
                return new(Breakpoint)(id, (function(d) {
                    return operations.execute(d, operations.location, (function(currentLocation) {
                        return (currentLocation && (loc.compare(currentLocation) === 0));
                    }), (function(_) {
                        return false;
                    }));
                }));
            });
            var createConditionalBreakpoint = (function(id, expression) {
                return new(Breakpoint)(id, (function(d) {
                    return operations.execute(d, toBoolean(expression), (function(result) {
                        return (result && result.value);
                    }), (function(_) {
                        return false;
                    }));
                }));
            });
    }
    (exports.Breakpoint = Breakpoint);
}))