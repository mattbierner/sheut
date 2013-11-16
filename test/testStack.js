define(['atum/compute',
        'sheut/debug',
        'sheut/step',
        'sheut/run',
        'sheut/operations/evaluation',
        'sheut/operations/context',
        'sheut/state'],
function(compute,
        debug,
        step,
        run,
        evaluate,
        context,
        state){
   
    return {
        'module': "Stack",
        'tests': [
            ["Get Empty Stack",
            function(){
                var d = debug.beginInput("function f(){}; debugger; ");
               
                var d1 = step.run(d);
                
                assert.deepEqual(
                    run.extract(d1, context.stack),
                    []);
            }],
            ["Get Simple Stack",
            function(){
                var d = debug.beginInput("function f(x){ if (x > 0) f(x -1); debugger; return x; }; f(10)");
               
                var d1 = step.run(d);
                
                var stack = run.extract(d1, context.stack);
                assert.deepEqual(
                    stack.length,
                    11);
            }],
            ["Get Simple Frame name",
            function(){
                var d = debug.beginInput("function f(x){ debugger; return x; }; f(10)");
               
                var d1 = step.run(d);
                
                var stack = run.extract(d1, context.stack);
                
                var name = run.extract(d1, context.getStackFrameName(stack[0]))
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
                
                var stack = run.extract(d1, context.stack);
                
                var name = run.extract(d1, context.getStackFrameName(stack[0]));
                assert.equal(
                    name.type,
                    'string');
                assert.equal(
                    name.value,
                    '[Anonymous Function]');
            }]
           
        ],
    };
});
