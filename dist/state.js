/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "bes/record", "bes/object", "sheut/debug_state"], (function(require, exports, record, __o,
    debug_state) {
    "use strict";
    var Debugger, isComplete, getResult, setBreakpoint, addBreakpoint, removeBreakpoint, deleteProperty = __o[
            "deleteProperty"],
        setProperty = __o["setProperty"];
    (Debugger = record.declare(null, ["debug", "breakpoints"]));
    (Debugger.initial = Debugger.create(null, ({})));
    (isComplete = (function(d) {
        return (d.debug && debug_state.isComplete(d.debug));
    }));
    (getResult = (function(d) {
        return ((d.debug && d.debug.complete) ? d.debug.k : null);
    }));
    (setBreakpoint = (function(d, id, breakpoint) {
        return d.setBreakpoints(setProperty(d.breakpoints, id, breakpoint, true));
    }));
    (addBreakpoint = setBreakpoint);
    (removeBreakpoint = (function(d, id) {
        return d.setBreakpoints(deleteProperty(d.breakpoints, id));
    }));
    (exports["Debugger"] = Debugger);
    (exports["isComplete"] = isComplete);
    (exports["getResult"] = getResult);
    (exports["setBreakpoint"] = setBreakpoint);
    (exports["addBreakpoint"] = addBreakpoint);
    (exports["removeBreakpoint"] = removeBreakpoint);
}));