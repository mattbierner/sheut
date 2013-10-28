/*
 * THIS FILE IS AUTO GENERATED from 'lib/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record"], (function(require, exports, record) {
    "use strict";
    var DebugState, Debugger, isComplete, addBreakpoint;
    var record = record; {
        var concat = Function.prototype.call.bind(Array.prototype.concat);
        (DebugState = record.declare(null, ["dgr", "k", "ctx", "complete", "depth"], (function(dgr, k, ctx, complete) {
            (this.dgr = dgr);
            (this.k = k);
            (this.ctx = ctx);
            (this.complete = complete);
            (this.depth = (ctx.userData ? ctx.userData.metadata.stack.length : 0));
        })));
        (Debugger = record.declare(null, ["debug", "breakpoints"]));
        (Debugger.initial = Debugger.create(null, []));
        (isComplete = (function(d) {
            return (d.debug && d.debug.complete);
        }));
        var getValue = (function(d) {
            return ((d.debug && d.debug.complete) ? d.debug.k : null);
        });
        (addBreakpoint = (function(d, breakpoint) {
            return d.setBreakpoints(concat(d.breakpoints, breakpoint));
        }));
    }
    (exports.DebugState = DebugState);
    (exports.Debugger = Debugger);
    (exports.isComplete = isComplete);
    (exports.addBreakpoint = addBreakpoint);
}))