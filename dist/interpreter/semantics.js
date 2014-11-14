/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/interpreter/semantics.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/statement", "atum/operations/execution_context",
    "atum/semantics/declaration", "atum/semantics/expression", "atum/semantics/func", "atum/semantics/program",
    "atum/semantics/semantics", "atum/semantics/value", "sheut/interpreter/debuggable",
    "sheut/interpreter/operations", "sheut/fun"
], (function(require, exports, compute, statement, execution_context, declaration_semantics, expression_semantics,
    function_semantics, program_semantics, semantics, value_semantics, atum_debuggable, debug, fun) {
    "use strict";
    var sourceElements, declarations, program, programBody, mapSemantics, f, y, f0, y0, f1, y1, f2, y2, f3, y3,
            f4, y4, f5, y5, f6, y6, f7, y7, f8, y8, f9, y9, f10, y10, f11, y11, f12, y12, x, y13, isStrict = (
                function(elems) {
                    if (((elems && elems.length) && (elems[0].type === "ExpressionStatement"))) {
                        var first = elems[0].expression;
                        return (((first && (first.type === "Literal")) && (first.kind === "string")) && (first.value ===
                            "use strict"));
                    }
                    return false;
                }),
        input = (function(loc, body) {
            return compute.next(execution_context.setLoc(loc), body);
        });
    (mapSemantics = (function() {
        var args = arguments;
        mapSemantics.apply(undefined, args);
    }));
    var merge = (function(__o, __o0) {
        var a = __o[0],
            b = __o[1],
            c = __o0[0],
            d = __o0[1];
        return [fun.concat(a, c), fun.concat(b, d)];
    }),
        decls = (function(node) {
            if ((!node)) return [[], []];
            if (node.length) return fun.map(decls, node)
                .reduceRight(merge, [
                    [],
                    []
                ]);
            switch (node.type) {
                case "SwitchCase":
                    return decls(node.consequent);
                case "CatchClause":
                    return decls(node.body);
                case "BlockStatement":
                    return decls(node.body);
                case "IfStatement":
                    return merge(decls(node.consequent), decls(node.alternate));
                case "SwitchStatement":
                    return decls(node.cases);
                case "TryStatement":
                    return merge(decls(node.block), merge(decls(node.handler), decls(node.finalizer)));
                case "WithStatement":
                case "WhileStatement":
                case "DoWhileStatement":
                    return decls(node.body);
                case "ForStatement":
                    return merge(decls(node.init), decls(node.body));
                case "ForInStatement":
                    return merge(decls(node.left), decls(node.body));
                case "FunctionDeclaration":
                    var id = node.id.name,
                        params = fun.map((function(x) {
                            return x.name;
                        }), node.params),
                        strict = isStrict(node.body.body);
                    return [[], [
                        [id, declaration_semantics.functionDeclaration(id, strict, params, node.body,
                            decls(node.body), mapSemantics(node.body))]
                    ]];
                case "VariableDeclaration":
                    return decls(node.declarations);
                case "VariableDeclarator":
                    return [[node.id.name], []];
            }
            return [[], []];
        }),
        emptyStatement = debug.debuggableStatement(semantics.emptyStatement),
        debuggerStatement = debug.debug(statement.empty, atum_debuggable.DebuggerDebuggable.create),
        declarationStatement = (function(vars) {
            return debug.debuggableStatement(semantics.declarationStatement(vars));
        }),
        blockStatement = (function(body) {
            return ((!body.length) ? emptyStatement : semantics.blockStatement(body));
        }),
        expressionStatement = ((f = semantics.expressionStatement), (y = debug.debuggableStatement), (function() {
            var args = arguments;
            return y(f.apply(null, args));
        })),
        ifStatement = ((f0 = semantics.ifStatement), (y0 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y0(f0.apply(null, args));
        })),
        breakStatement = ((f1 = semantics.breakStatement), (y1 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y1(f1.apply(null, args));
        })),
        continueStatement = ((f2 = semantics.continueStatement), (y2 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y2(f2.apply(null, args));
        })),
        returnStatement = ((f3 = semantics.returnStatement), (y3 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y3(f3.apply(null, args));
        })),
        throwStatement = ((f4 = semantics.throwStatement), (y4 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y4(f4.apply(null, args));
        })),
        withStatement = ((f5 = semantics.withStatement), (y5 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y5(f5.apply(null, args));
        })),
        switchStatement = ((f6 = semantics.switchStatement), (y6 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y6(f6.apply(null, args));
        })),
        tryStatement = ((f7 = semantics.tryStatement), (y7 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y7(f7.apply(null, args));
        })),
        whileStatement = ((f8 = semantics.whileStatement), (y8 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y8(f8.apply(null, args));
        })),
        doWhileStatement = ((f9 = semantics.doWhileStatement), (y9 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y9(f9.apply(null, args));
        })),
        forStatement = ((f10 = (function(init, test, update, body) {
            return semantics.forStatement(debug.debuggable(init), debug.debuggable(test), debug.debuggable(
                update), body);
        })), (y10 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y10(f10.apply(null, args));
        })),
        forInStatement = ((f11 = semantics.forInStatement), (y11 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y11(f11.apply(null, args));
        })),
        forVarInStatement = ((f12 = semantics.forVarInStatement), (y12 = debug.debuggableStatement), (function() {
            var args = arguments;
            return y12(f12.apply(null, args));
        })),
        thisExpression = semantics.thisExpression,
        sequenceExpression = semantics.sequenceExpression,
        unaryExpression = semantics.unaryExpression,
        updateExpression = semantics.updateExpression,
        binaryExpression = semantics.binaryExpression,
        logicalExpression = semantics.logicalExpression,
        assignmentExpression = semantics.assignmentExpression,
        conditionalExpression = semantics.conditionalExpression,
        newExpression = semantics.newExpression,
        callExpression = ((x = debug.debuggableCall), (y13 = semantics.callExpression), (function() {
            var args = arguments;
            return x(y13.apply(null, args));
        })),
        memberExpression = semantics.memberExpression,
        computedMemberExpression = semantics.computedMemberExpression,
        arrayExpression = semantics.arrayExpression,
        objectExpression = semantics.objectExpression,
        functionExpression = semantics.functionExpression;
    (sourceElements = (function(elems) {
        return program_semantics.sourceElements(isStrict(elems), decls(elems), mapSemantics(elems));
    }));
    (program = program_semantics.program);
    (programBody = program_semantics.programBody);
    var x0 = program_semantics.program,
        y14 = sourceElements;
    (program = (function() {
        var args = arguments;
        return y14(x0.apply(null, args));
    }));
    var variableDeclarator = semantics.variableDeclarator,
        identifier = semantics.identifier,
        literal = semantics.literal;
    (mapSemantics = (function() {
        var mapper = (function(node) {
            switch (node.type) {
                case "SwitchCase":
                    return ({
                        "test": mapSemantics(node.test),
                        "consequent": (node.consequent && fun.map(mapSemantics, node.consequent))
                    });
                case "CatchClause":
                    return mapSemantics(node.body);
                case "EmptyStatement":
                    return emptyStatement;
                case "DebuggerStatement":
                    return debuggerStatement;
                case "BlockStatement":
                    return blockStatement(fun.map(mapSemantics, node.body));
                case "ExpressionStatement":
                    return expressionStatement(mapSemantics(node.expression));
                case "IfStatement":
                    return ifStatement(mapSemantics(node.test), mapSemantics(node.consequent),
                        mapSemantics(node.alternate));
                case "LabeledStatement":
                    break;
                case "BreakStatement":
                    return breakStatement(node.label);
                case "ContinueStatement":
                    return continueStatement(node.label);
                case "ReturnStatement":
                    return returnStatement(mapSemantics(node.argument));
                case "ThrowStatement":
                    return throwStatement(mapSemantics(node.argument));
                case "WithStatement":
                    return withStatement(mapSemantics(node.object), mapSemantics(node.body));
                case "SwitchStatement":
                    return switchStatement(mapSemantics(node.discriminant), fun.map(mapSemantics,
                        node.cases));
                case "TryStatement":
                    return tryStatement(mapSemantics(node.block), (node.handler && node.handler.param),
                        mapSemantics(node.handler), mapSemantics(node.finalizer));
                case "WhileStatement":
                    return whileStatement(mapSemantics(node.test), mapSemantics(node.body));
                case "DoWhileStatement":
                    return doWhileStatement(mapSemantics(node.body), mapSemantics(node.test));
                case "ForStatement":
                    return forStatement(mapSemantics(node.init), mapSemantics(node.test),
                        mapSemantics(node.update), mapSemantics(node.body));
                case "ForInStatement":
                    if ((node.left.type === "VariableDeclaration")) return forVarInStatement(node.left
                        .declarations[0].id.name, mapSemantics(node.right), mapSemantics(node.body)
                    );
                    return forInStatement(mapSemantics(node.left), mapSemantics(node.right),
                        mapSemantics(node.body));
                case "ThisExpression":
                    return thisExpression;
                case "SequenceExpression":
                    return sequenceExpression(fun.map(mapSemantics, node.expressions));
                case "UnaryExpression":
                    return unaryExpression(node.operator, mapSemantics(node.argument));
                case "UpdateExpression":
                    return updateExpression(node.operator, node.prefix, mapSemantics(node.argument));
                case "BinaryExpression":
                    return binaryExpression(node.operator, mapSemantics(node.left), mapSemantics(
                        node.right));
                case "LogicalExpression":
                    return logicalExpression(node.operator, mapSemantics(node.left), mapSemantics(
                        node.right));
                case "AssignmentExpression":
                    return assignmentExpression(node.operator, mapSemantics(node.left),
                        mapSemantics(node.right));
                case "ConditionalExpression":
                    return conditionalExpression(mapSemantics(node.test), mapSemantics(node.consequent),
                        mapSemantics(node.alternate));
                case "NewExpression":
                    return newExpression(mapSemantics(node.callee), fun.map(mapSemantics, node.args));
                case "CallExpression":
                    return callExpression(mapSemantics(node.callee), fun.map(mapSemantics, node.args));
                case "MemberExpression":
                    return (node.computed ? computedMemberExpression(mapSemantics(node.object),
                        mapSemantics(node.property)) : memberExpression(mapSemantics(node.object),
                        node.property));
                case "ArrayExpression":
                    return arrayExpression(fun.map(mapSemantics, node.elements));
                case "ObjectExpression":
                    return objectExpression(node.properties);
                case "FunctionExpression":
                    return functionExpression(node.id, node.params, node.body, decls(node.body),
                        mapSemantics(node.body));
                case "FunctionDeclaration":
                    return statement.empty;
                case "Program":
                    return program(node.body);
                case "VariableDeclaration":
                    return declarationStatement(fun.map(mapSemantics, node.declarations));
                case "VariableDeclarator":
                    return variableDeclarator(node.id, mapSemantics(node.init));
                case "Identifier":
                    return identifier(node.name);
                case "Literal":
                    return literal(node.kind, node.value);
            }
            return null;
        });
        return (function(node) {
            if ((!node)) return node;
            else if (Array.isArray(node)) return fun.map(mapSemantics, node);
            var result = mapper(node);
            return (((typeof result) === "function") ? input(node.loc, result) : result);
        });
    })());
    (exports["sourceElements"] = sourceElements);
    (exports["declarations"] = declarations);
    (exports["program"] = program);
    (exports["programBody"] = programBody);
    (exports["mapSemantics"] = mapSemantics);
}));