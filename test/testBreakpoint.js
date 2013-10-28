define(['sheut/breakpoint',
        'sheut/run',
        'sheut/step',
        'sheut/operations',
        'sheut/state'],
function(breakpoint,
        run,
        step,
        operations,
        state){
   
    return {
        'module': "Breakpoint",
        'tests': [
            ["Run",
            function(){
                var d = run.beginFromInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
                var bp = breakpoint.createUnconditional(0, 3);
                d = state.addBreakpoint(d, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    operations.execute(d1, operations.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    operations.execute(d2, operations.evaluateInput("x")).value,
                    3);
            }],
        ],
    };
});
