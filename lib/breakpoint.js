/*
 * THIS FILE IS AUTO GENERATED from 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "atum/compute", "atum/compute/program", "atum/operations/boolean", "sheut/fun", "sheut/run", "sheut/policy", "sheut/operations/context"], (function(require, exports, record, __o, program, __o0, __o1, __o2, __o3, context) {
    "use strict";
    var Breakpoint, create, unconditional, conditional;
    var record = record,
        __o = __o,
        bind = __o["bind"],
        program = program,
        __o0 = __o0,
        isTrue = __o0["isTrue"],
        __o1 = __o1,
        args = __o1["args"],
        foldl = __o1["foldl"],
        __o2 = __o2,
        extract = __o2["extract"],
        __o3 = __o3,
        and = __o3["and"],
        statementDgr = __o3["statementDgr"],
        context = context;
    var containsLine = (function(location, line) {
        return ((location.start.line <= line) && (line <= location.end.line));
    });
    (Breakpoint = record.declare(null, ["id", "test", "ud"]));
    (create = Breakpoint.create);
    (unconditional = (function(line) {
        return and(statementDgr, (function(current, next) {
            return extract(current, context.location, false, (function(currentLocation) {
                return extract(next, context.location, false, (function(nextLocation) {
                    return (((!currentLocation || !containsLine(currentLocation, line)) && nextLocation) && containsLine(nextLocation, line));
                }));
            }));
        }));
    }));
    (conditional = (function(prog) {
        return (function() {
            {
                var condition = program.bind(prog, (function(f, g) {
                    return (function() {
                        return f(g.apply(null, arguments));
                    });
                })(program.liftStatement, isTrue));
                return (function(_, next) {
                    return extract(next, condition, false);
                });
            }
        })();
    }));
    (exports.Breakpoint = Breakpoint);
    (exports.create = create);
    (exports.unconditional = unconditional);
    (exports.conditional = conditional);
}))