import { square } from "./playground.js";

function cont_frac(n, d, k) {
    function iter(count) {
        return count === k
               ? n(count) / d(count)
               : n(count) / (d(count) + iter(count + 1));
    }

    return iter(1);
}

function tan_cf(x, k) {
    function N(i) {
        return i === 1
               ? x
               : square(x);
    }

    function D(i) {
        return i * 2 - 1;
    }

    return cont_frac(N, D, k);
}