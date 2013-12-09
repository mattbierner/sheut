/*
 * THIS FILE IS AUTO GENERATED from 'lib/debug_state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record"], (function(require, exports, record) {
    "use strict";
    var DebugState, inject;
    var record = record;
    (DebugState = record.declare(null, ["dgr", "k", "ctx", "complete", "depth"], (function(dgr, k, ctx,
        complete, previousLocation) {
        (this.dgr = dgr);
        (this.k = k);
        (this.ctx = ctx);
        (this.complete = complete);
        (this.depth = (ctx.userData ? ctx.userData.metadata.stack.length : 0));
    })));
    (inject = (function(source, result) {
        return source.setCtx(source.ctx.setValues(result.ctx.values));
    }));
    (exports.DebugState = DebugState);
    (exports.inject = inject);
}))