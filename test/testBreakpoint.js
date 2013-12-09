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
                var d = state.Debugger.initial;
                
                var bp = breakpoint.create(breakpoint.unconditional(3));
                d = state.addBreakpoint(d, 0, bp);
                
                d = debug.beginInput(d, "var x=0 \n x=1; \n x=2; \n x=3;");
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    3);
            }],
             ["Multiple line bp",
            function(){
                var d = state.Debugger.initial;
                
                d = state.addBreakpoint(d, 0, breakpoint.create(breakpoint.unconditional(3)));
                d = state.addBreakpoint(d, 1, breakpoint.create(breakpoint.unconditional(4)));

                d = debug.beginInput(d, "var x=0 \n x=1; \n x=2; \n x=3;");
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    2);
                
                var d3 = step.run(d2);
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("x")).value,
                    3);
            }],
            ["Remove bp",
            function(){
                var d = state.Debugger.initial;
                
                var bp = breakpoint.create(breakpoint.unconditional(2));
                d = state.addBreakpoint(d, 0, bp);

                d = debug.beginInput(d, "function f(x) {\n ; \n; if (x > 10) return x; return f(x + 1); };\n x = f(0)");
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    0);
                
                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    1);
                
                var d3 = step.run(state.removeBreakpoint(d2, 0));
                assert.equal(
                    run.extract(d3, evaluate.evaluateInput("x")).value,
                    11);
            }],
            
            ["multi line bp only hit once",
            function(){
                var d = debug.beginInitialInput("var x=0 \n x=1; \n x=2; x=3; \n x=4;");
                
                var bp = breakpoint.create(breakpoint.unconditional(3));
                d = state.addBreakpoint(d, 0, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    4);
            }],
            /* Temp disabling this behavior until a better solution can be found.
            ["multi line expression hits on first line once",
            function(){
                var d = debug.beginInitialInput("var x = [56]; x = [0, \n 1, \n 2, 3, \n 4];");
                
                var bp = breakpoint.create(breakpoint.unconditional(2));
                d = state.addBreakpoint(d, 0, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x[0]")).value,
                    56);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x[0]")).value,
                    0);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x.length")).value,
                    5);
            }],
            */
            ["Nested Statement breakpoint",
            function(){
                var d = debug.beginInitialInput("var x = 0; { \n x = 1; \n x = 2; \n x = 3 \n }");
                
                var bp = breakpoint.create(breakpoint.unconditional(3));
                d = state.addBreakpoint(d, 0, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    1);

                var d2 = step.run(d1);
                assert.equal(
                    run.extract(d2, evaluate.evaluateInput("x")).value,
                    3);
            }],
            
            ["Basic conditional bp",
            function(){
                var d = debug.beginInitialInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
                var bp = breakpoint.create(breakpoint.conditional(
                    evaluate.evaluateInput("typeof x !== 'undefined' && x === 1")));
                d = state.addBreakpoint(d, 0, bp);
                
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
                var d = debug.beginInitialInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
                var bp = breakpoint.create(breakpoint.conditional(evaluate.evaluateInput("d")));
                d = state.addBreakpoint(d, 0, bp);
                
                var d1 = step.run(d);
                assert.equal(
                    run.extract(d1, evaluate.evaluateInput("x")).value,
                    3);
            }],
            
            ["And conditional bp",
            function(){
                var d = debug.beginInitialInput("var x=0 \n x=1; \n x=2; \n x=3;");
                
                var bp = breakpoint.create(
                    policy.and(
                        breakpoint.conditional(
                            evaluate.evaluateInput("x > 0")),
                        breakpoint.unconditional(3)));
                
                d = state.addBreakpoint(d, 0, bp);
                
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
