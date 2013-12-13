/*
 * THIS FILE IS AUTO GENERATED from 'lib/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record", "amulet/object", "sheut/fun"], (function(require, exports, record, __o,
    __o0) {
    "use strict";
    var Debugger, isComplete, getResult, addBreakpoint, removeBreakpoint;
    var record = record,
        __o = __o,
        deleteProperty = __o["deleteProperty"],
        setProperty = __o["setProperty"],
        __o0 = __o0,
        concat = __o0["concat"];
    (Debugger = record.declare(null, ["debug", "breakpoints"]));
    (Debugger.initial = Debugger.create(null, ({})));
    (isComplete = (function(d) {
        return (d.debug && d.debug.complete);
    }));
    (getResult = (function(d) {
        return ((d.debug && d.debug.complete) ? d.debug.k : null);
    }));
    (addBreakpoint = (function(d, id, breakpoint) {
        return d.setBreakpoints(setProperty(d.breakpoints, id, breakpoint, true));
    }));
    (removeBreakpoint = (function(d, id) {
        return d.setBreakpoints(deleteProperty(d.breakpoints, id));
    }));
    (exports.Debugger = Debugger);
    (exports.isComplete = isComplete);
    (exports.getResult = getResult);
    (exports.addBreakpoint = addBreakpoint);
    (exports.removeBreakpoint = removeBreakpoint);
}))