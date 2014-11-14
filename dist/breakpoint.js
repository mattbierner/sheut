/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/breakpoint.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "bes/record", "atum/compute", "atum/compute/program", "atum/operations/boolean",
    "sheut/fun", "sheut/run", "sheut/policy", "sheut/state", "sheut/operations/context"
], (function(require, exports, record, __o, program, __o0, __o1, __o2, __o3, __o4, context) {
    "use strict";
    var Breakpoint, create, unconditional, conditional, bind = __o["bind"],
        isTrue = __o0["isTrue"],
        extract = __o2["extract"],
        and = __o3["and"],
        statementDgr = __o3["statementDgr"],
        test = __o3["test"],
        setBreakpoint = __o4["setBreakpoint"],
        hasLine = (function(location, line) {
            return (location.start.line === line);
        });
    (Breakpoint = record.declare(null, ["test", "ud", "update"]));
    (Breakpoint.prototype.policy = (function(id) {
        var self = this;
        return (function(current, next, previous) {
            var r = self.test(current, next, previous);
            return (r ? setBreakpoint(next, id) : r);
        });
    }));
    (create = Breakpoint.create);
    (unconditional = (function(line) {
        return and(statementDgr, test((function(current, next, previous) {
            return extract(previous, context.location, false, (function(currentLocation) {
                return extract(next, context.location, false, (function(
                    nextLocation) {
                    return ((((!currentLocation) || (!hasLine(
                            currentLocation, line))) && nextLocation) &&
                        hasLine(nextLocation, line));
                }));
            }));
        })));
    }));
    (conditional = (function(prog) {
        var condition = bind(prog, isTrue);
        return and(statementDgr, test((function(_, next) {
            return extract(next, condition, false);
        })));
    }));
    (exports["Breakpoint"] = Breakpoint);
    (exports["create"] = create);
    (exports["unconditional"] = unconditional);
    (exports["conditional"] = conditional);
}));