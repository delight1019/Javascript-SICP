import { is_good_enough, improve } from "./playground.js";

function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}

console.log(conditional(2 === 3, 0, 5));
console.log(conditional(1 === 1, 0, 5));

function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x)),
                       guess,
                       sqrt_iter(improve(guess, x), x);
}

console.log(sqrt_iter(1, 2));

// 인수 우선 평가로 해석기가 동작할 때 condition 함수의 else_clause로 호출하는 sqrt_iter가 재귀적으로 conditional을 호출하여 무한 루프가 발생한다.