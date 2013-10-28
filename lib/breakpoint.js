/*
 * THIS FILE IS AUTO GENERATED from 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/debug/debuggable", "atum/operations/type_conversion", "sheut/operations"], (function(require, exports, record, debuggable, __o, operations) {
    "use strict";
    var Breakpoint, createUnconditional, createConditional;
    var record = record,
        debuggable = debuggable,
        __o = __o,
        toBoolean = __o["toBoolean"],
        operations = operations; {
            (Breakpoint = record.declare(null, ["id", "test"]));
            (createUnconditional = (function(id, line) {
                return Breakpoint.create(id, (function(d) {
                    return operations.executeContext(d, operations.location, (function(currentLocation) {
                        return (currentLocation && (currentLocation.start.line === line));
                    }), (function(_) {
                        return false;
                    }));
                }));
            }));
            (createConditional = (function(id, expression) {
                return Breakpoint.create(id, (function(d) {
                    return operations.executeContext(d, toBoolean(expression), (function(result) {
                        return (result && result.value);
                    }), (function(_) {
                        return false;
                    }));
                }));
            }));
            var binaryBreakpoint = (function(f) {
                return (function(id, b1, b2) {
                    return Breakpoint.create(id, (function(d) {
                        return f(b1.test(d), b2.test(d));
                    }));
                });
            });
    }
    (exports.Breakpoint = Breakpoint);
    (exports.createUnconditional = createUnconditional);
    (exports.createConditional = createConditional);
}))