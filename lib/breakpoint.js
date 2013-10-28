/*
 * THIS FILE IS AUTO GENERATED from 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/compute", "atum/compute/program", "atum/debug/debuggable", "atum/operations/boolean", "sheut/operations"], (function(require, exports, record, __o, program, debuggable, __o0, operations) {
    "use strict";
    var Breakpoint, createUnconditional, createConditional;
    var record = record,
        __o = __o,
        bind = __o["bind"],
        program = program,
        debuggable = debuggable,
        __o0 = __o0,
        isTrue = __o0["isTrue"],
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
            (createConditional = (function(id, prog) {
                return (function() {
                    {
                        var condition = program.bind(prog, (function(f, g) {
                            return (function() {
                                return g(f.apply(null, arguments));
                            });
                        })(isTrue, program.liftStatement)); {
                            return Breakpoint.create(id, (function(d) {
                                return operations.executeContext(d, condition, (function(result) {
                                    return result;
                                }), (function(_) {
                                    return false;
                                }));
                            }));
                        }
                    }
                })();
            }));
            var binary = (function(f) {
                return (function(id, b1, b2) {
                    return Breakpoint.create(id, (function(d) {
                        return f(b1.test(d), b2.test(d));
                    }));
                });
            });
            var and = binary((function(x, y) {
                return (x && y);
            }));
            var or = binary((function(x, y) {
                return (x || y);
            }));
    }
    (exports.Breakpoint = Breakpoint);
    (exports.createUnconditional = createUnconditional);
    (exports.createConditional = createConditional);
}))