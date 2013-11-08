define(['atum/compute',
        'sheut/breakpoint',
        'sheut/debug',
        'sheut/step',
        'sheut/run',
        'sheut/policy',
        'sheut/operations/evaluation',
        'sheut/operations/context',
        'sheut/state'],
function(compute,
        breakpoint,
        debug,
        step,
        run,
        policy,
        evaluate,
        context,
        state){
   
    return {
        'module': "Context",
        'tests': [
            ["Get Environment",
            function(){
                var d = debug.beginInput("var a = 0; var b = 0;");
               
                var d1 = step.finish(step.run(d));
                
                assert.equal(
                    run.extract(d1, compute.bind(context.environment, context.getEnvironmentOuter)),
                    null);
                
               assert.equal(
                    run.extract(d1, compute.bind(context.environment, function(env) {
                        return context.getEnvironmentBinding(env, 'a');
                    })).value,
                    0);
            }]
        ],
    };
});
