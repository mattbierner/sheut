/*
 * THIS FILE IS AUTO GENERATED from 'lib/semantics/semantics.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "atum/compute", "atum/compute/statement", "atum/operations/execution_context",
    "atum/semantics/declaration", "atum/semantics/expression", "atum/semantics/func", "atum/semantics/program",
    "atum/semantics/semantics", "atum/semantics/value", "sheut/semantics/debug/debuggable",
    "sheut/semantics/debug/operations", "sheut/fun"
], (function(require, exports, compute, statement, execution_context, declaration_semantics, expression_semantics,
    function_semantics, program_semantics, semantics, value_semantics, atum_debuggable, debug, fun) {
    "use strict";
    var sourceElements, declarations, program, programBody, mapSemantics;
    var compute = compute,
        statement = statement,
        execution_context = execution_context,
        declaration_semantics = declaration_semantics,
        expression_semantics = expression_semantics,
        function_semantics = function_semantics,
        program_semantics = program_semantics,
        semantics = semantics,
        value_semantics = value_semantics,
        atum_debuggable = atum_debuggable,
        debug = debug,
        fun = fun;
    var isStrict = (function(elems) {
        if (((elems && elems.length) && (elems[0].type === "ExpressionStatement"))) {
            var first = elems[0].expression;
            return (((first && (first.type === "Literal")) && (first.kind === "string")) && (first.value ===
                "use strict"));
        }
        return false;
    });
    var input = (function(loc, body) {
        return compute.next(execution_context.setLoc(loc), body);
    });
    (mapSemantics = (function() {
        var args = arguments;
        return mapSemantics.apply(undefined, args);
    }));
    (declarations = (function(node) {
        if (!node) return compute.empty;
        switch (node.type) {
            case "SwitchCase":
                return compute.sequencea(fun.map(declarations, node.consequent));
            case "CatchClause":
                return declarations(node.body);
            case "BlockStatement":
                return compute.sequencea(fun.map(declarations, node.body));
            case "IfStatement":
                return compute.next(declarations(node.consequent), declarations(node.alternate));
            case "SwitchStatement":
                return compute.sequencea(fun.map(declarations, node.cases));
            case "TryStatement":
                return compute.sequence(declarations(node.block), declarations(node.handler),
                    declarations(node.finalizer));
            case "WithStatement":
            case "WhileStatement":
            case "DoWhileStatement":
                return declarations(node.body);
            case "ForStatement":
                return compute.next(declarations(node.init), declarations(node.body));
            case "ForInStatement":
                return compute.next(declarations(node.left), declarations(node.body));
            case "FunctionDeclaration":
                return (function() {
                    {
                        var id = ((node.id === null) ? null : node.id.name),
                            params = fun.map((function(x) {
                                return x.name;
                            }), node.params),
                            strict = isStrict(node.body.body);
                        return declaration_semantics.functionDeclaration(id, strict, params, node.body,
                            declarations(node.body), mapSemantics(node.body));
                    }
                })
                    .call(this);
            case "VariableDeclaration":
                return declaration_semantics.variableDeclaration(fun.map(declarations, node.declarations));
            case "VariableDeclarator":
                return declaration_semantics.variableDeclarator(node.id.name);
        }
        return compute.empty;
    }));
    var sourceBody = (function(elems) {
        return program_semantics.sourceBody(isStrict(elems), fun.map(mapSemantics, elems));
    });
    var debuggableStatement = (function(f) {
        return fun.compose(debug.debuggableStatement, f);
    });
    var emptyStatement = debug.debuggableStatement(semantics.emptyStatement);
    var debuggerStatement = debug.debug(statement.empty, atum_debuggable.DebuggerDebuggable.create);
    var declarationStatement = (function(vars) {
        return debug.debuggableStatement(semantics.declarationStatement(vars));
    });
    var blockStatement = (function(body) {
        return (!body.length ? emptyStatement : semantics.blockStatement(body));
    });
    var expressionStatement = debuggableStatement(semantics.expressionStatement);
    var ifStatement = debuggableStatement(semantics.ifStatement);
    var breakStatement = debuggableStatement(semantics.breakStatement);
    var continueStatement = debuggableStatement(semantics.continueStatement);
    var returnStatement = debuggableStatement(semantics.returnStatement);
    var throwStatement = debuggableStatement(semantics.throwStatement);
    var withStatement = debuggableStatement(semantics.withStatement);
    var switchStatement = debuggableStatement(semantics.switchStatement);
    var tryStatement = debuggableStatement(semantics.tryStatement);
    var whileStatement = debuggableStatement(semantics.whileStatement);
    var doWhileStatement = debuggableStatement(semantics.doWhileStatement);
    var forStatement = debuggableStatement((function(init, test, update, body) {
        return semantics.forStatement(debug.debuggable(init), debug.debuggable(test), debug.debuggable(
            update), body);
    }));
    var forInStatement = debuggableStatement(semantics.forInStatement);
    var forVarInStatement = debuggableStatement(semantics.forVarInStatement);
    var thisExpression = semantics.thisExpression;
    var sequenceExpression = semantics.sequenceExpression;
    var unaryExpression = semantics.unaryExpression;
    var updateExpression = semantics.updateExpression;
    var binaryExpression = semantics.binaryExpression;
    var logicalExpression = semantics.logicalExpression;
    var assignmentExpression = semantics.assignmentExpression;
    var conditionalExpression = semantics.conditionalExpression;
    var newExpression = semantics.newExpression;
    var callExpression = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(debug.debuggableCall, semantics.callExpression);
    var memberExpression = semantics.memberExpression;
    var computedMemberExpression = semantics.computedMemberExpression;
    var arrayExpression = semantics.arrayExpression;
    var objectExpression = semantics.objectExpression;
    var functionExpression = semantics.functionExpression;
    (sourceElements = (function(elems) {
        return program_semantics.sourceElements(isStrict(elems), fun.map(declarations, elems), fun.map(
            mapSemantics, elems));
    }));
    (program = program_semantics.program);
    (programBody = program_semantics.programBody);
    (program = fun.compose(program_semantics.program, sourceElements));
    var variableDeclarator = semantics.variableDeclarator;
    var identifier = semantics.identifier;
    var literal = semantics.literal;
    (mapSemantics = (function() {
        var mapper = (function(node) {
            var loc = node.loc;
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
                    return functionExpression(node.id, node.params, node.body, declarations(node.body),
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
            if (!node) return node;
            if (Array.isArray(node)) return fun.map(mapSemantics, node);
            var result = mapper(node);
            return ((typeof result === "function") ? input(node.loc, result) : result);
        });
    })());
    (exports.sourceElements = sourceElements);
    (exports.declarations = declarations);
    (exports.program = program);
    (exports.programBody = programBody);
    (exports.mapSemantics = mapSemantics);
}))