/*
 * THIS FILE IS AUTO GENERATED from 'lib/semantics/debug/debuggable.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/record"], (function(require, exports, record) {
    "use strict";
    var Debuggable, StatementDebuggable, ExpressionDebuggable, DebuggerDebuggable, PreCallDebuggable,
            PostCallDebuggable;
    var record = record;
    (Debuggable = record.declare(null, ["k", "ctx"]));
    (Debuggable.type = "Debuggable");
    (StatementDebuggable = record.extend(Debuggable, []));
    (StatementDebuggable.type = "Statement");
    (ExpressionDebuggable = record.extend(Debuggable, []));
    (ExpressionDebuggable.type = "Expression");
    (DebuggerDebuggable = record.extend(Debuggable, []));
    (DebuggerDebuggable.type = "Debugger");
    (PreCallDebuggable = record.extend(Debuggable, []));
    (PreCallDebuggable.type = "PreCall");
    (PostCallDebuggable = record.extend(Debuggable, []));
    (PostCallDebuggable.type = "PostCall");
    (exports.Debuggable = Debuggable);
    (exports.StatementDebuggable = StatementDebuggable);
    (exports.ExpressionDebuggable = ExpressionDebuggable);
    (exports.DebuggerDebuggable = DebuggerDebuggable);
    (exports.PreCallDebuggable = PreCallDebuggable);
    (exports.PostCallDebuggable = PostCallDebuggable);
}))