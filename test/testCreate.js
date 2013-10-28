define(['sheut/run',
        'sheut/step',
        'sheut/operations'],
function(run,
        step,
        operations){
   
    return {
        'module': "Create",
        'tests': [
            ["Simple",
            function(){
                var d = run.beginFromInput("3");
                var r = step.finish(d);
                assert.equal(r.debug.k.value, 3);
            }],
            
            ["error",
            function(){
                var d = run.beginFromInput("throw 3;", function() { }, function(x) { return x; });
                var r = step.finish(d);
                assert.equal(r.debug.k.value, 3);
            }]
        ],
    };
});
