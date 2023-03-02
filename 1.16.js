function iter_fast_expt(b, n) {
    function iter(a, b, n) {
        return n === 0
               ? a
               : n % 2 === 1
               ? iter(a * b, b, n - 1)
               : iter(a, b * b, n / 2);
    }

    return iter(1, b, n);
}

console.log(iter_fast_expt(3, 10));