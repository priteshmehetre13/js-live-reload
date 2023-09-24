// var sum = a => b => b ? sum(a + b) : a;

function sum(a){
    return function x(b){
        if(b){
            return sum(a+b)
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)(5)(6)(7)());
