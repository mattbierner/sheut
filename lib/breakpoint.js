/*
 * THIS FILE IS AUTO GENERATED from 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/compute", "atum/compute/program", "atum/operations/boolean", "sheut/run", "sheut/operations/context", "sheut/fun"], (function(require, exports, record, __o, program, __o0, operations, context, __o1) {
    "use strict";
    var Breakpoint, create, unconditional, conditional;
    var record = record,
        __o = __o,
        bind = __o["bind"],
        program = program,
        __o0 = __o0,
        isTrue = __o0["isTrue"],
        operations = operations,
        context = context,
        __o1 = __o1,
        args = __o1["args"],
        foldl = __o1["foldl"]; {
            (Breakpoint = record.declare(null, ["id", "test", "ud"]));
            (create = Breakpoint.create);
            (unconditional = (function(line) {
                return (function(current, next) {
                    return operations.evaluate(current, context.location, (function(currentLocation) {
                        return operations.evaluate(next, context.location, (function(nextLocation) {
                            return (((!currentLocation || (currentLocation.start.line !== line)) && nextLocation) && (nextLocation.start.line === line));
                        }), (function(_) {
                            return false;
                        }));
                    }), (function(_) {
                        return false;
                    }));
                });
            }));
            (conditional = (function(prog) {
                return (function() {
                    {
                        var condition = program.bind(prog, (function(f, g) {
                            return (function() {
                                return g(f.apply(null, arguments));
                            });
                        })(isTrue, program.liftStatement)); {
                            return (function(_, next) {
                                return operations.evaluate(next, condition, (function(result) {
                                    return result;
                                }), (function(_) {
                                    return false;
                                }));
                            });
                        }
                    }
                })();
            }));
    }
    (exports.Breakpoint = Breakpoint);
    (exports.create = create);
    (exports.unconditional = unconditional);
    (exports.conditional = conditional);
}))