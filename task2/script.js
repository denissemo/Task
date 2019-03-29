function sum(a) {

    let result = a;

    function f(b) {
        result += b;

        return f;
    }

    return f;

}

console.log(sum(1)(5)(6));
