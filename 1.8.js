import { square, abs, cubic } from "./playground.js";

function improve(guess, x) {
    return (x / square(guess) + 2 * guess) / 3;
}

function is_good_enough(guess, x) {
    let delta = abs(improve(guess, x) - guess);
    return delta < guess * 0.001;
}

function cubic_root_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : cubic_root_iter(improve(guess, x), x);
}

function cubic_root(x) {
    return cubic_root_iter(1, x);
}

let root = cubic_root(3);
console.log(root);
console.log(cubic(root));