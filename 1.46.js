import { math_cos } from "sicp";
import { abs, square, average } from "./playground.js";

function iterative_improve(close_enough, improve) {
    return guess => close_enough(guess)
                    ? guess
                    : iterative_improve(close_enough, improve)(improve(guess));
}

function sqrt(x) {
    return iterative_improve(guess => abs(square(guess) - x) < 0.001,
                             guess => average(guess, x / guess))(x);
}

function fixed_point(f, first_guess) {
    const tolerance = 0.00001;

    return iterative_improve(guess => abs(guess - f(guess)) < tolerance,
                             guess => f(guess))(first_guess);
}

console.log(sqrt(3));
console.log(fixed_point(math_cos, 1));