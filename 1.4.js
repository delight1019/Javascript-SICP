function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function a_plus_abs_b(a ,b) {
    return (b >= 0 ? plus : minus)(a, b);
}

// b가 0보다 크면 a와 b를 더하고, b가 0보다 작으면 a에서 b를 뺀다.