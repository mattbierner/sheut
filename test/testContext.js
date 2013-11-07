define(['sheut/breakpoint',
        'sheut/debug',
        'sheut/step',
        'sheut/run',
        'sheut/policy',
        'sheut/operations/evaluation',
        'sheut/state'],
function(breakpoint,
        debug,
        step,
        run,
        policy,
        evaluate,
        state){
   
    return {
        'module': "Context",
        'tests': [
            ["Get Environment",
            function(){
                var d = debug.beginInput("var a = 0; var b = 0;");
                
                var bp = breakpoint.create(0, breakpoint.unconditional(3));
                d = state.addBreakpoint(d, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    3);
            }]
        ],
    };
});
