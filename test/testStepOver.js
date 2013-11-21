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
        'module': "Step Over",
        'tests': [
            ["Step over",
            function(){
                var d = step.run(debug.beginInput("function f(){ var x = 3; return x * 2; }; var x = 0; debugger; x = f(); x = 5;"));
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("typeof x")).value,
                    'number');
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("x")).value,
                    0);
                assert.equal(
                    run.extract(d, context.stack).length,
                    0);
                    
                var d1 = step.sequence(step.step, step.stepOver)(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    6);
                assert.equal(
                    run.extract(d1, context.stack).length,
                    0);
                
                var d2 = step.step(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    5);
            }],
            ["Step over hits debugger in function",
            function(){
                var d = step.run(debug.beginInput("function f(){ var x = 3; debugger; return x * 2; }; var x = 0; debugger; x = f(); x = 5;"));
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("typeof x")).value,
                    'number');
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("x")).value,
                    0);
                assert.equal(
                    run.extract(d, context.stack).length,
                    0);
                    
                var d1 = step.sequence(step.step, step.stepOver)(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    3);
                assert.equal(
                    run.extract(d1, context.stack).length,
                    1);
            }],
        ],
    };
});
