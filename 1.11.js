// 재귀적 과정
function f(n) {
    return n < 3
           ? n
           : f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3);
}

// 반복적 과정
function f2(n) {
    function iter(a, b, c, count ) {
        return count < 3
               ? c
               : iter(b, c, c + 2 * b + 3 * a, count - 1);
    }

    return iter(0, 1, 2, n);
}

console.log(f(10));
console.log(f2(10));