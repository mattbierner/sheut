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
        'module': "Breakpoint",
        'tests': [
            ["Basic line bp",
            function(){
                var d = debug.beginInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
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
            }],
            ["multi line bp only hit once",
            function(){
                var d = debug.beginInput("var x=0 \n x=1; \n x=2; x=3; \n x=4;");
                
                var bp = breakpoint.create(0, breakpoint.unconditional(3));
                d = state.addBreakpoint(d, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    4);
            }],
            
            ["Basic conditional bp",
            function(){
                var d = debug.beginInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
                var bp = breakpoint.create(0, breakpoint.conditional(
                    evaluate.evaluateInput("typeof x !== 'undefined' && x === 1")));
                d = state.addBreakpoint(d, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    3);
            }],
            
            ["Bad conditional bp always fails",
            function(){
                var d = debug.beginInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
                var bp = breakpoint.create(0, breakpoint.conditional(evaluate.evaluateInput("d")));
                d = state.addBreakpoint(d, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    3);
            }],
            
            ["And conditional bp",
            function(){
                var d = debug.beginInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
                var bp = breakpoint.create(0,
                    policy.and(
                        breakpoint.conditional(
                            evaluate.evaluateInput("x > 0")),
                        breakpoint.unconditional(3)));
                
                d = state.addBreakpoint(d, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    3);
            }],
        ],
    };
});
