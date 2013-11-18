define(['atum/compute',
        'sheut/breakpoint',
        'sheut/debug',
        'sheut/step',
        'sheut/run',
        'sheut/policy',
        'sheut/operations/evaluation',
        'sheut/operations/object',
        'sheut/state'],
function(compute,
        breakpoint,
        debug,
        step,
        run,
        policy,
        evaluate,
        object,
        state){
   
    return {
        'module': "Object",
        'tests': [
            ["Simple Get Properties",
            function(){
                var d = debug.beginInput("var x = {'x': 3, 'y': 4}");
               
                var d1 = step.finish(d);
                
                var obj =  run.extract(d1, compute.bind(
                    evaluate.evaluateInput("x"),
                    object.getOwnProperties));
                
                assert.equal(obj['x'].value, 3);
                assert.equal(obj['y'].value, 4)
            }],
            
        ],
    };
});
