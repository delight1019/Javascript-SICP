function fast_times(a, b) {
    function iter(a, b, c) {
        return b === 0
               ? c
               : b % 2 === 1
               ? iter(a, b - 1, c + a)
               : iter(2 * a, b / 2, c);
    }

    return iter(a, b, 0);
}

console.log(fast_times(19, 19));