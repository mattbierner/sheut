define(['sheut/debug',
        'sheut/step'],
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
            
            ["error",
            function(){
                var d = debug.beginInput("throw 3;", function() { }, function(x) { return x; });
                var r = step.finish(d);
                assert.equal(r.debug.k.value, 3);
            }]
        ],
    };
});
