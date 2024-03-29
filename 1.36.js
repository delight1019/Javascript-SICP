import { display, math_log } from "sicp";
import { average, abs } from "./playground.js";

function fixed_point(f, first_guess) {
    const tolerance = 0.00001;

    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }

    function try_with(guess) {
        display(guess);
        const next = f(guess);
        return close_enough(guess, next)
               ? next
               : try_with(next);
    }

    return try_with(first_guess);
}

fixed_point(x => math_log(1000) / math_log(x), 2);
fixed_point(x => average(x, math_log(1000) / math_log(x)), 2);