function accumulate(combiner, null_value, term, a, next, b) {
    return a > b
           ? null_value
           : combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b));
}

function sum(term, a, next, b) {
    function sum_combiner(x, y) {
        return x + y;
    }

    return accumulate(sum_combiner, 0, term, a, next, b);
}

function product(term, a, next, b) {
    function product_combiner(x, y) {
        return x * y;
    }

    return accumulate(product_combiner, 1, term, a, next, b);
}

function accumulate_iter(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), combiner(result, term(a)));
    }

    return iter(a, null_value);
}