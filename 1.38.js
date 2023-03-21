function cont_frac(n, d, k) {
    function iter(count) {
        return count === k
               ? n(count) / d(count)
               : n(count) / (d(count) + iter(count + 1));
    }

    return iter(1);
}

function D(i) {
    return i % 3 === 0 || i % 3 === 1
           ? 1
           : (i / 3 + 1) * 2;
}

console.log(cont_frac(i => 1, D, 10000) + 2);