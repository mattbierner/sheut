/*
 * THIS FILE IS AUTO GENERATED from 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/compute", "atum/compute/program", "atum/operations/boolean", "sheut/run", "sheut/operations/context"], (function(require, exports, record, __o, program, __o0, operations, context) {
    "use strict";
    var Breakpoint, createUnconditional, createConditional, and, or;
    var record = record,
        __o = __o,
        bind = __o["bind"],
        program = program,
        __o0 = __o0,
        isTrue = __o0["isTrue"],
        operations = operations,
        context = context; {
            (Breakpoint = record.declare(null, ["id", "test", "ud"]));
            (createUnconditional = (function(id, line) {
                return Breakpoint.create(id, (function(current, next) {
                    return operations.evaluate(current, context.location, (function(currentLocation) {
                        return operations.evaluate(next, context.location, (function(nextLocation) {
                            return (((!currentLocation || (currentLocation.start.line !== line)) && nextLocation) && (nextLocation.start.line === line));
                        }), (function(_) {
                            return false;
                        }));
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
                            return Breakpoint.create(id, (function(_, next) {
                                return operations.evaluate(next, condition, (function(result) {
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
            (and = binary((function(x, y) {
                return (x && y);
            })));
            (or = binary((function(x, y) {
                return (x || y);
            })));
    }
    (exports.Breakpoint = Breakpoint);
    (exports.createUnconditional = createUnconditional);
    (exports.createConditional = createConditional);
    (exports.and = and);
    (exports.or = or);
}))