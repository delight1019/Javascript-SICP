// a
function cont_frac(n, d, k) {
    function iter(count) {
        return count === k
               ? n(count) / d(count)
               : n(count) / (d(count) + iter(count + 1));
    }

    return iter(1);
}

// b
function cont_frac_iter(n, d, k) {
    function iter(count, result) {
        return count === 1
               ? result
               : iter(count - 1, n(count) / (d(count) + result));
    }

    return iter(k, n(k) / d(k));
}

console.log(cont_frac(i => 1, i => 1, 100));
console.log(cont_frac_iter(i => 1, i => 1, 100));