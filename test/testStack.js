define(['atum/compute',
        'sheut/debug',
        'sheut/step',
        'sheut/run',
        'sheut/operations/evaluation',
        'sheut/operations/context',
        'sheut/operations/stack',
        'sheut/state'],
function(compute,
        debug,
        step,
        run,
        evaluate,
        context,
        stack,
        state){
   
    return {
        'module': "Stack",
        'tests': [
            ["Get Empty Stack",
            function(){
                var d = debug.beginInput("function f(){}; ");
               
                var d1 = step.run(d);
                
                assert.deepEqual(
                    run.extract(d1, stack.stack).length,
                    1);
            }],
            ["Get Empty Stack env",
            function(){
                var d = debug.beginInput("var x = 2; function f(x){ }; f(4); debugger;");
               
                var d1 = step.run(d);
                
                var s = run.extract(d1, stack.stack);
                
                assert.deepEqual(
                    s.length,
                    1);
                
                assert.deepEqual(
                    run.extract(d1, context.getEnvironmentBinding(s[0].environment, 'x')).value,
                    2);
            }],
            
            ["Get Simple Stack",
            function(){
                var d = debug.beginInput("function f(x){ if (x > 0) f(x -1); debugger; return x; }; f(10)");
               
                var d1 = step.run(d);
                
                var s = run.extract(d1, stack.stack);
                assert.deepEqual(
                    s.length,
                    12);
            }],
            ["Get Simple Frame name",
            function(){
                var d = debug.beginInput("function f(x){ debugger; return x; }; f(10)");
               
                var d1 = step.run(d);
                
                var s = run.extract(d1, stack.stack);
                
                var name = run.extract(d1, context.getStackFrameName(s[0]))
                assert.equal(
                    name.type,
                    'string');
                assert.equal(
                    name.value,
                    'f');
            }],
            ["Get Unnamed Frame name",
            function(){
                var d = debug.beginInput("(function(){ debugger; }())");
               
                var d1 = step.run(d);
                
                var s = run.extract(d1, stack.stack);
                
                var name = run.extract(d1, context.getStackFrameName(s[0]));
                assert.equal(
                    name.type,
                    'string');
                assert.equal(
                    name.value,
                    '[Anonymous Function]');
            }],
            
            ["Get Stack env",
            function(){
                var d = debug.beginInput("var x = 2; function f(x){ function g(x) { debugger; }; return g(x * 2) }; f(4);");
               
                var d1 = step.run(d);
                
                var s = run.extract(d1, stack.stack);
                
                assert.deepEqual(
                    s.length,
                    3);
                
                assert.deepEqual(
                    run.extract(d1, context.getEnvironmentBinding(s[0].environment, 'x')).value,
                    8);
            }],
           
        ],
    };
});
