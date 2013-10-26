define(['sheut/run', 'sheut/step', 'sheut/operations'],
function(run, step, operations){
   
    return {
        'module': "Create",
        'tests': [
            ["Simple",
            function(){
                var d = run.beginFromInput("3");
                var r = step.finish(d);
                assert.equal(r.k.value, 3);
            }],
            
            ["Step",
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
        ],
    };
});
