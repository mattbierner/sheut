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
        'module': "Step Out",
        'tests': [
            ["Step out",
            function(){
                var d = step.run(debug.beginInitialInput("function f(x){ return (x > 5 ? x : f(x + 1)); }; var x = 0; debugger; x = f(0); x = 5;"));
                    
                var d1 = step.sequence(step.step, step.step, step.step, step.step)(d); // 3 calls
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    2);
                assert.equal(
                    run.extract(d1, context.stack).length,
                    3);
                
                var d2 = step.stepOut(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    1);
               assert.equal(
                    run.extract(d2, context.stack).length,
                    2);
               
                var d3 = step.sequence(step.stepOut, step.stepOut)(d2);
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("x")).value,
                    0);
               assert.equal(
                    run.extract(d3, context.stack).length,
                    0);
               
                var d4 = step.step(d3);
                assert.equal(
                    run.extract(d4, evaluate.evaluateInput("x")).value,
                    6);
            }],
            ["Step out hits debugger",
            function(){
                var d = step.run(debug.beginInitialInput("function f(x){ if (x > 5) { debugger; return x; } return f(x + 1); }; var x = 0; debugger; x = f(0); x = 5;"));
                    
                var d1 = step.sequence(step.step, step.step, step.step, step.step, step.step)(d); // 2 calls
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);
                assert.equal(
                    run.extract(d1, context.stack).length,
                    2);
                
                var d2 = step.stepOut(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    6);
               assert.equal(
                    run.extract(d2, context.stack).length,
                    7);
            }],
        ],
    };
});
