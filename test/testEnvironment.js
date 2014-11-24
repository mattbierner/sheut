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
        state) {
   
    return {
        'module': "Context",
        'tests': [
            ["Get Environment Bindings Simple",
            function(){
                var d = debug.beginInitialInput("var a = 0; var b = 4;");
               
                var d1 = step.run(d);
                
                var env = run.extract(d1, compute.bind(context.environment, context.getEnvironmentBindings));
                assert.equal(env['a'].value.type, 'number');
                assert.equal(env['a'].value.value, 0);
                
                assert.equal(env['b'].value.type, 'number');
                assert.equal(env['b'].value.value, 4);
            }],
            ["Get Environment Bindings Inner",
            function(){
                var d = debug.beginInitialInput("function x() { var a = 0; var b = 4; debugger; }; x();");
               
                var d1 = step.run(d);
                
                var env = run.extract(d1, compute.bind(context.environment, context.getEnvironmentBindings));
                assert.equal(env['a'].value.type, 'number');
                assert.equal(env['a'].value.value, 0);
                
                assert.equal(env['b'].value.type, 'number');
                assert.equal(env['b'].value.value, 4);
            }],
        ],
    };
});
