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
               
                var d1 = step.run(d);
                
                assert.equal(
                    run.extract(d1, compute.bind(context.environment, context.getEnvironmentOuter)),
                    null);
                
                var a = run.extract(d1, compute.bind(context.environment, function(env) {
                    return context.getEnvironmentBinding(env, 'a');
                }));
                assert.equal(a.type, 'number');
                assert.equal(a.value, 0);
                
                var inf = run.extract(d1, compute.bind(context.environment, function(env) {
                    return context.getEnvironmentBinding(env, 'Infinity');
                }));
                assert.equal(inf.type, 'number');
                assert.equal(inf.value, Infinity);
                
                // Lookup undefined binding
                var none = run.extract(d1, compute.bind(context.environment, function(env) {
                    return context.getEnvironmentBinding(env, 'x');
                }));
                assert.ok(!none);
            }],
            ["Outer ",
            function(){
                var d = debug.beginInput("var a = 0; function f() { var a = 10; debugger; } f(); a = 3 ");
               
                var d1 = step.run(d);
                
                var a = run.extract(d1, compute.bind(context.environment, function(env) {
                    return context.getEnvironmentBinding(env, 'a');
                }));
                assert.equal(a.type, 'number');
                assert.equal(a.value, 10);
                
                var outer = run.extract(d1, compute.bind(context.environment, context.getEnvironmentOuter));
                assert.ok(outer);
                
                var aOuter = run.extract(d1, context.getEnvironmentBinding(outer, 'a'));
                assert.equal(aOuter.type, 'number');
                assert.equal(aOuter.value, 0);
            }]
        ],
    };
});
