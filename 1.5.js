function p() {
    return p();
}

function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());

// 인수 우선 평가
/*
test(0, p())
-> test(0, p())
-> test(0, p())
-> test(0, p())
-> test(0, p())
-> ...

이므로 무한 루프가 발생한다.
*/

// 정상 순서 평가
/*
test(0, p())
-> (0 === 0 ? 0 : p())
-> 0

이므로 0으로 평가된다.
*/