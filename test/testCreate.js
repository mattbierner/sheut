define(['sheut/debug',
        'sheut/step',
        'sheut/run'],
function(debug,
        step)
{
    return {
        'module': "Create",
        'tests': [
            ["Simple",
            function(){
                var d = debug.beginInput("3");
                var r = step.finish(d);
                assert.equal(r.debug.k.value, 3);
            }],
            ["Syntax Error",
            function(){
                var d = debug.beginInput("var", undefined, function(x) {
                    return assert.ok(true);
                });
                
                var r = step.finish(d);
            }],
            
            ["error",
            function(){
                var d = debug.beginInput("throw 3;", function() { }, function(x) { return x; });
                var r = step.finish(d);
                assert.equal(r.debug.k.value, 3);
            }]
        ],
    };
});
