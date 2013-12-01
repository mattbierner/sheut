define(['sheut/debug',
        'sheut/step',
        'sheut/run',
        'sheut/operations/context',
        'sheut/operations/evaluation'],
function(debug,
        step,
        run,
        context,
        evaluate){
   
    return {
        'module': "Step",
        'tests': [
            ["Run",
            function(){
                var d = debug.beginInitialInput("var a, b; a = 3; debugger; b = 4; debugger; a = 5;");
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("typeof a")).value,
                    'undefined');
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("typeof b")).value,
                    'undefined');
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("a")).value,
                    3);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("b")).value,
                    undefined);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("a")).value,
                    3);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("b")).value,
                    4);
                
                var d3 = step.run(d2);
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("a")).value,
                    5);
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("b")).value,
                    4);
            }],
            
            ["Step",
            function(){
                var d = step.step(debug.beginInitialInput("var a, b; a = 3; b = 4; a = 5;"));
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("typeof a")).value,
                    'undefined');
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("typeof b")).value,
                    'undefined');
                
                var d1 = step.step(step.step(d));
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("a")).value,
                    3);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("b")).value,
                    undefined);

                var d2 = step.step(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("a")).value,
                    3);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("b")).value,
                    4);
                
                var d3 = step.step(d2);
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("a")).value,
                    5);
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("b")).value,
                    4);
            }],
            ["Step goes into and out of functions",
            function(){
                var d = debug.beginInitialInput("function f(){ var x = 3; return x * 2; }; var x = 0; debugger; x = f(); x = 5;");
                d = step.run(d);
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("typeof x")).value,
                    'number');
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("x")).value,
                    0);
                assert.equal(
                    run.extract(d, context.stack).length,
                    0);
                    
                var d1 = step.sequence(step.step, step.step, step.step)(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    3);
                assert.equal(
                    run.extract(d1, context.stack).length,
                    1);
                
                var d2 = step.step(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    6);
            }],
            ["Step goes into empty",
            function(){
                var d = debug.beginInitialInput("var x= 4;\nfunction f(x){ };\ndebugger; f(3);");
                d = step.run(d);
                    
                var d1 = step.step(step.step(d));
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    3);
                assert.equal(
                    run.extract(d1, context.stack).length,
                    1);
                
                var d2 = step.step(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    4);
            }],
        ],
    };
});
