import { improve, sqrt, square, abs } from "./playground.js";

function print_example(x, sqrt_func) {
    let square_root = sqrt_func(x);
    console.log(x + "의 제곱근을 구하면 " + square_root + "이지만, 이 수를 제곱하면 " + square(square_root) + "이다.");
}

// 기존의 is_good_enough 함수는 guess의 제곱이 주어진 값과 0.001 이내의 범위에 들어오면 옳은 것으로 판단하므로, 0.001 보다 작은 수의 제곱근을 제대로 구할 수 없다.
print_example(0.0001, sqrt);

function is_good_enough(guess, x) {
    let delta = abs(improve(guess, x) - guess);
    return delta < guess * 0.001;
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : sqrt_iter(improve(guess, x), x);
}

function sqrt2(x) {
    return sqrt_iter(1, x);
}

print_example(0.0001, sqrt2);
// 본문의 함수보다 더 잘 작동하는 것을 확인할 수 있다.