/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/interpreter/debuggable.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "bes/record"], (function(require, exports, record) {
    "use strict";
    var Debuggable, CompleteDebuggable, StatementDebuggable, ExpressionDebuggable, DebuggerDebuggable,
            PreCallDebuggable, PostCallDebuggable;
    (Debuggable = record.declare(null, ["k", "ctx"]));
    (Debuggable.prototype.type = "Debuggable");
    (Debuggable.type = Debuggable.prototype.type);
    (CompleteDebuggable = record.extend(Debuggable, []));
    (CompleteDebuggable.prototype.type = "Complete");
    (CompleteDebuggable.type = CompleteDebuggable.prototype.type);
    (StatementDebuggable = record.extend(Debuggable, []));
    (StatementDebuggable.prototype.type = "Statement");
    (StatementDebuggable.type = StatementDebuggable.prototype.type);
    (ExpressionDebuggable = record.extend(Debuggable, []));
    (ExpressionDebuggable.prototype.type = "Expression");
    (ExpressionDebuggable.type = ExpressionDebuggable.prototype.type);
    (DebuggerDebuggable = record.extend(Debuggable, []));
    (DebuggerDebuggable.prototype.type = "Debugger");
    (DebuggerDebuggable.type = DebuggerDebuggable.prototype.type);
    (PreCallDebuggable = record.extend(Debuggable, []));
    (PreCallDebuggable.prototype.type = "PreCall");
    (PreCallDebuggable.type = PreCallDebuggable.prototype.type);
    (PostCallDebuggable = record.extend(Debuggable, []));
    (PostCallDebuggable.prototype.type = "PostCall");
    (PostCallDebuggable.type = PostCallDebuggable.prototype.type);
    (exports["Debuggable"] = Debuggable);
    (exports["CompleteDebuggable"] = CompleteDebuggable);
    (exports["StatementDebuggable"] = StatementDebuggable);
    (exports["ExpressionDebuggable"] = ExpressionDebuggable);
    (exports["DebuggerDebuggable"] = DebuggerDebuggable);
    (exports["PreCallDebuggable"] = PreCallDebuggable);
    (exports["PostCallDebuggable"] = PostCallDebuggable);
}));