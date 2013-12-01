/*
 * THIS FILE IS AUTO GENERATED from 'lib/run.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute/statement", "atum/compute/program", "sheut/debug", "sheut/state"], (
    function(require, exports, statement, program, __o, __o0) {
        "use strict";
        var execute, evaluate, extract, transform;
        var statement = statement,
            program = program,
            __o = __o,
            debug = __o["debug"],
            executeProgram = __o["execute"],
            __o0 = __o0,
            getResult = __o0["getResult"];
        var ret = (function(x) {
            return x;
        });
        var thr = (function(x) {
            throw x;
        });
        var finish = (function() {
            var args = arguments; {
                var __o1 = require("sheut/step"),
                    finish = __o1["finish"];
                return finish.apply(null, args);
            }
        });
        (execute = (function(d, p, ok, err) {
            return (function() {
                {
                    var result = finish(debug(d, program.liftStatement(statement.liftExpression(p)), d.debug
                        .ctx, (function(x, ctx) {
                            return (function(d) {
                                return ok(x, ctx, d);
                            });
                        }), (function(x, ctx) {
                            return (function(d) {
                                return err(x, ctx, d);
                            });
                        })));
                    return getResult(result)(result);
                }
            })();
        }));
        (evaluate = (function(d, p, ok, err) {
            return execute(d, p, (ok || ret), (err || thr));
        }));
        (extract = (function(d, p, def, ok) {
            return (function() {
                {
                    var suc = (ok || ret);
                    return execute(d, p, suc, (function(_, _0) {
                        return def;
                    }));
                }
            })();
        }));
        (transform = (function(d, p, ok, err) {
            return finish(debug(d, p, d.debug.ctx, ok, err))
                .debug;
        }));
        (exports.execute = execute);
        (exports.evaluate = evaluate);
        (exports.extract = extract);
        (exports.transform = transform);
    }))