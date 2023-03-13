import { cube, sum } from "./playground.js";

function SimpsonRule(f, a, b, n) {
    function h() {
        return (b - a) / n;
    }

    function y(count) {
        return f(a + count * h());
    }

    function iter(count) {
        return count > n
               ? 0
               : (count == 0) || (count == n)
               ? y(count) * h() / 3 + iter(count + 1)
               : count % 2 == 1
               ? 4 * y(count) * h() / 3 + iter(count + 1)
               : 2 * y(count) * h() / 3 + iter(count + 1)
    }

    return iter(0);
}

console.log(SimpsonRule(cube, 0, 1, 100));
console.log(SimpsonRule(cube, 0, 1, 1000));