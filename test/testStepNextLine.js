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
        'module': "Step next Line",
        'tests': [
            ["Multi Line Stement",
            function(){
                var d = step.stepNextLine(step.step(
                    debug.beginInput("var x= 0;\n x = 3; x =4; x =5;\n x= 6")));
                assert.equal(
                    run.extract(d, evaluate.evaluateInput("x")).value,
                    0);
                
                var d1 = step.stepNextLine(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    5);

                var d2 = step.stepNextLine(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    6);
            }],
            ["Step next line goes into and out of functions",
            function(){
                var d = debug.beginInput("function f(x){ x *= 2; return x * 3; };\n var x = 0; debugger;\n x = f(4);\n x = 5;");
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
                    
                var d1 = step.sequence(step.stepNextLine, step.stepNextLine)(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    4);
                assert.equal(
                    run.extract(d1, context.stack).length,
                    1);
                
                var d2 = step.stepNextLine(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    24);
                
                var d3 = step.stepNextLine(d2);
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("x")).value,
                    5);
            }]
        ],
    };
});
