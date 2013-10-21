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
                assert.equal(operations.evaluateInput(d, "typeof a").value, 'undefined');
                assert.equal(operations.evaluateInput(d, "typeof b").value, 'undefined');
                
                var d1 = step.run(d);
                assert.equal(operations.evaluateInput(d1, "a").value, 3);
                assert.equal(operations.evaluateInput(d1, "b").value, undefined);

                var d2 = step.run(d1);
                assert.equal(operations.evaluateInput(d2, "a").value, 3);
                assert.equal(operations.evaluateInput(d2, "b").value, 4);
                
                var d3 = step.run(d2);
                assert.equal(operations.evaluateInput(d3, "a").value, 5);
                assert.equal(operations.evaluateInput(d3, "b").value, 4);
            }],
        ],
    };
});
