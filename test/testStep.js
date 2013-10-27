define(['sheut/run',
        'sheut/step',
        'sheut/operations'],
function(run,
        step,
        operations){
   
    return {
        'module': "Step",
        'tests': [
            ["Run",
            function(){
                var d = run.beginFromInput("var a, b; a = 3; debugger; b = 4; debugger; a = 5;");
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof a")).value,
                    'undefined');
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof b")).value,
                    'undefined');
                
                var d1 = step.run(d);
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("a")).value,
                    3);
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("b")).value,
                    undefined);

                var d2 = step.run(d1);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("a")).value,
                    3);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("b")).value,
                    4);
                
                var d3 = step.run(d2);
                assert.equal(
                    operations.execute(d3, operations.evaluateInput("a")).value,
                    5);
                assert.equal(
                    operations.execute(d3, operations.evaluateInput("b")).value,
                    4);
            }],
            
            ["Step",
            function(){
                var d = step.step(run.beginFromInput("var a, b; a = 3; b = 4; a = 5;"));
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof a")).value,
                    'undefined');
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof b")).value,
                    'undefined');
                
                var d1 = step.step(d);
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("a")).value,
                    3);
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("b")).value,
                    undefined);

                var d2 = step.step(d1);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("a")).value,
                    3);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("b")).value,
                    4);
                
                var d3 = step.step(d2);
                assert.equal(
                    operations.execute(d3, operations.evaluateInput("a")).value,
                    5);
                assert.equal(
                    operations.execute(d3, operations.evaluateInput("b")).value,
                    4);
            }],
            ["Step goes into and out of functions",
            function(){
                var d = run.beginFromInput("function f(){ var x = 3; return x * 2; }; var x = 0; debugger; x = f(); x = 5; debugger;");
                d = step.run(d);
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof x")).value,
                    'number');
                assert.equal(
                    operations.execute(d, operations.evaluateInput("x")).value,
                    0);
                assert.equal(
                    operations.execute(d, operations.stack).length,
                    0);
                    
                var d1 = step.step(step.step(d));
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("x")).value,
                    3);
                assert.equal(
                    operations.execute(d1, operations.stack).length,
                    1);
                
                var d2 = step.step(d1);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("x")).value,
                    6);
            }],
            
            ["Step over",
            function(){
                var d = run.beginFromInput("function f(){ var x = 3; return x * 2; }; var x = 0; debugger; x = f(); x = 5; debugger;");
                d = step.step(step.run(d));
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof x")).value,
                    'number');
                assert.equal(
                    operations.execute(d, operations.evaluateInput("x")).value,
                    0);
                assert.equal(
                    operations.execute(d, operations.stack).length,
                    0);
                    
                var d1 = step.stepOver(step.step(d));
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("x")).value,
                    6);
                assert.equal(
                    operations.execute(d1, operations.stack).length,
                    0);
                
                var d2 = step.step(d1);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("x")).value,
                    5);
            }],
        ],
    };
});
