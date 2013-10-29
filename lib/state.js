/*
 * THIS FILE IS AUTO GENERATED from 'lib/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "sheut/fun"], (function(require, exports, record, __o) {
    "use strict";
    var Debugger, isComplete, getResult, addBreakpoint;
    var record = record,
        __o = __o,
        concat = __o["concat"]; {
            (Debugger = record.declare(null, ["debug", "breakpoints"]));
            (Debugger.initial = Debugger.create(null, []));
            (isComplete = (function(d) {
                return (d.debug && d.debug.complete);
            }));
            (getResult = (function(d) {
                return ((d.debug && d.debug.complete) ? d.debug.k : null);
            }));
            (addBreakpoint = (function(d, breakpoint) {
                return d.setBreakpoints(concat(d.breakpoints, breakpoint));
            }));
    }
    (exports.Debugger = Debugger);
    (exports.isComplete = isComplete);
    (exports.getResult = getResult);
    (exports.addBreakpoint = addBreakpoint);
}))