/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/debug_state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "bes/record", "sheut/interpreter/debuggable"], (function(require, exports, record, __o) {
    "use strict";
    var DebugState, createForDgr, isComplete, inject, CompleteDebuggable = __o["CompleteDebuggable"];
    (DebugState = record.declare(null, ["dgr", "k", "ctx", "complete", "depth"], (function(dgr, k, ctx,
        complete, previousLocation) {
        var self = this;
        (self.dgr = dgr);
        (self.k = k);
        (self.ctx = ctx);
        (self.complete = (complete || (dgr instanceof CompleteDebuggable)));
        (self.depth = (ctx.userData ? ctx.userData.metadata.stack.length : 0));
    })));
    (createForDgr = (function(dgr) {
        var k = dgr["k"],
            ctx = dgr["ctx"];
        return DebugState.create(dgr, k, ctx, (dgr instanceof CompleteDebuggable));
    }));
    (isComplete = (function(y) {
        return (y && y.complete);
    }));
    (inject = (function(source, result) {
        return source.setCtx(source.ctx.setValues(result.ctx.values));
    }));
    (exports["DebugState"] = DebugState);
    (exports["createForDgr"] = createForDgr);
    (exports["isComplete"] = isComplete);
    (exports["inject"] = inject);
}));