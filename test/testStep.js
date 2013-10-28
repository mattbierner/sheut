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
                
                var d1 = step.step(step.step(d));
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
                var d = run.beginFromInput("function f(){ var x = 3; return x * 2; }; var x = 0; debugger; x = f(); x = 5;");
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
                    
                var d1 = step.sequence(step.step, step.step, step.step)(d);
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
        
        // Step over
            ["Step over",
            function(){
                var d = step.run(run.beginFromInput("function f(){ var x = 3; return x * 2; }; var x = 0; debugger; x = f(); x = 5;"));
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof x")).value,
                    'number');
                assert.equal(
                    operations.execute(d, operations.evaluateInput("x")).value,
                    0);
                assert.equal(
                    operations.execute(d, operations.stack).length,
                    0);
                    
                var d1 = step.sequence(step.step, step.stepOver)(d);
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
            ["Step over hits debugger in function",
            function(){
                var d = step.run(run.beginFromInput("function f(){ var x = 3; debugger; return x * 2; }; var x = 0; debugger; x = f(); x = 5;"));
                assert.equal(
                    operations.execute(d, operations.evaluateInput("typeof x")).value,
                    'number');
                assert.equal(
                    operations.execute(d, operations.evaluateInput("x")).value,
                    0);
                assert.equal(
                    operations.execute(d, operations.stack).length,
                    0);
                    
                var d1 = step.sequence(step.step, step.stepOver)(d);
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("x")).value,
                    3);
                assert.equal(
                    operations.execute(d1, operations.stack).length,
                    1);
            }],
        
        // Step out
            ["Step out",
            function(){
                var d = step.run(run.beginFromInput("function f(x){ return (x > 5 ? x : f(x + 1)); }; var x = 0; debugger; x = f(0); x = 5;"));
                    
                var d1 = step.sequence(step.step, step.step, step.step, step.step)(d); // 3 calls
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("x")).value,
                    2);
                assert.equal(
                    operations.execute(d1, operations.stack).length,
                    3);
                
                var d2 = step.stepOut(d1);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("x")).value,
                    1);
               assert.equal(
                    operations.execute(d2, operations.stack).length,
                    2);
               
                var d3 = step.sequence(step.stepOut, step.stepOut)(d2);
                assert.equal(
                    operations.execute(d3, operations.evaluateInput("x")).value,
                    0);
               assert.equal(
                    operations.execute(d3, operations.stack).length,
                    0);
               
                var d4 = step.step(d3);
                assert.equal(
                    operations.execute(d4, operations.evaluateInput("x")).value,
                    6);
            }],
            ["Step out hits debugger",
            function(){
                var d = step.run(run.beginFromInput("function f(x){ if (x > 5) { debugger; return x; } return f(x + 1); }; var x = 0; debugger; x = f(0); x = 5;"));
                    
                var d1 = step.sequence(step.step, step.step, step.step, step.step, step.step)(d); // 2 calls
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("x")).value,
                    1);
                assert.equal(
                    operations.execute(d1, operations.stack).length,
                    2);
                
                var d2 = step.stepOut(d1);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("x")).value,
                    6);
               assert.equal(
                    operations.execute(d2, operations.stack).length,
                    7);
            }],
        ],
    };
});
