/*
 * THIS FILE IS AUTO GENERATED from 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/compute", "atum/compute/program", "atum/operations/boolean", "sheut/run", "sheut/operations/context", "sheut/fun"], (function(require, exports, record, __o, program, __o0, __o1, context, __o2) {
    "use strict";
    var Breakpoint, create, unconditional, conditional;
    var record = record,
        __o = __o,
        bind = __o["bind"],
        program = program,
        __o0 = __o0,
        isTrue = __o0["isTrue"],
        __o1 = __o1,
        extract = __o1["extract"],
        context = context,
        __o2 = __o2,
        args = __o2["args"],
        foldl = __o2["foldl"]; {
            (Breakpoint = record.declare(null, ["id", "test", "ud"]));
            (create = Breakpoint.create);
            (unconditional = (function(line) {
                return (function(current, next) {
                    return extract(current, context.location, false, (function(currentLocation) {
                        return extract(next, context.location, false, (function(nextLocation) {
                            return (((!currentLocation || (currentLocation.start.line !== line)) && nextLocation) && (nextLocation.start.line === line));
                        }));
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
                                return extract(next, condition, false);
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