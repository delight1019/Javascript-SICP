function times(a, b) {
    return b === 0
           ? 0
           : a + times(a, b - 1);
}

function double(a) {
    return 2 * a;
}

function halve(a) {
    return a / 2;
}

function fast_times(a, b) {
    function iter(a, b) {
        return b === 0
               ? 0
               : b % 2 === 1
               ? a + iter(a, b - 1)
               : iter(double(a), halve(b));
    }

    return iter(a, b);
}

console.log(fast_times(3, 4));
console.log(fast_times(12, 13));