function sum(a) {
    let args = Object.values(arguments);
    let result = args.reduce(function(a, b) { return a + b; }, 0);

    function f(b) {
        let args = Object.values(arguments);
        let r = args.reduce(function(a, b) { return a + b; }, 0);
        result += r;

        return f;
    }

    f.toString = function(){
        return result;
    };
    return f;

}

console.log(sum(2)(4)(3)());
console.log(sum());
console.log(sum(2, 4)(3)());
