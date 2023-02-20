# 1.1 프로그래밍의 기본 요소
- 원시 표현식(primitive expression): 언어와 관련한 가장 단순한 개체(entity)를 나타낸다.
- 조합(combination) 수단: 단순한 요소들로부터 복합적인 요소를 만드는데 쓰인다.
  - 다른 표현식을 구성요소로 담고 있는 표현식을 가리킨다.
- 추상화(abstraction) 수단: 복합적인 요소들에 이름을 붙여서 하나의 단위로 다루는 데 쓰인다.
- REPL: read-evaluate-print loop

## 연산자 조합을 평가할 때 해석기가 따르는 절차
- 주어진 연산자 조합을 평가하기 위해 다음을 수행한다:
  1. 조합의 피연산자 표현식들을 평가한다. -> 재귀적(recursive)
  2. 연산자가 나타내는 함수를 인수(피연산자들의 값)들에 적용한다.
- 원시 표현식 평가의 규칙
  - 수치의 값은 해당 숫자들이 나타내는 바로 그 값이다.
  - 이름의 값은 현재 **환경**에서 그 이름에 연관된 객체이다. 

## 자바스크립트 프로그래밍의 원시 요소들
- 수치와 산술 연산은 원시 데이터와 원시 함수에 해당한다.
- 조합의 중첩은 연산들을 조합하는 수단을 제공한다.
- 이름과 값을 연관시키는 상수 선언은 제한적이나마 추상화의 수단을 제공한다.

## 함수 선언(function declaration)
```javascript
function  이름(매개변수들) {
    return 표현식;
}

// Example
function square(x) {
    return x * x;
}
```
- 이름: 환경 안에서 함수 정의와 연관시킬 기호
- 매개변수: 함수의 본문 안에서 함수의 인수들을 지칭하는 데 사용할 지역 이름들
- 반환 표현식: 함수 적용의 값을 산출

- 함수 적용을 평가하려면 다음을 수행한다:
  1. 적용의 부분식들, 즉 함수 표현식과 인수표현식들을 각각 평가한다.
  2. 함수, 즉 함수 표현식의 값을 인수 표현식 값들에 적용한다.

## 함수 적용의 치환 모형
- 해석기는 먼저 함수 적용의 요소들을 평가한 후 함수(함수 적용 중 함수 표현식의 값)을 인수들(함수 적용 중인수 표현식들의 값들)에 적용한다.
- 복합 함수의 적용 과정: 하나의 복합 함수를 인수들에 적용하기 위해, 함수의 각 매개변수를 해당 인수로 치환해서 함수의 반환 표현식을 평가한다.

```javascript
function f(a) {
  reutrn sum_of_square(a + 1, a * 2);
}

function sum_of_square(x, y)  {
  return square(x) + square(y);
}

function square(x) {
  return x * x;
}

// 치환 모형의 동작 과정 (인수 우선 평가)
f(5)
-> sum_of_squares(5 + 1, 5 * 2)
-> square(6) + square(10)
-> (6 *6) + (10 * 10)
-> 36 + 100
-> 136
```
- 치환 모형은 예시일 뿐, 해석기가 반드시 이런 식으로 작동한다는 뜻은 아니다.

## 인수 우선 평가 대 정상 순서 평가
- 인수 우선 평가(applicative-order evaluation): 먼저 인수들을 평가한 후 적용
- 정상 순서 평가(normal-order evaluation): 먼저 완전히 전개한 후 축약
```javascript
// 정상 순서 평가의 예시
f(5)
-> sum_of_squares(5 + 1, 5 * 2)
-> square(5 + 1) + square(5 *2)
-> (5 +1) * (5 + 1) + (5 * 2) + (5 * 2) // 연산자와 원시 함수들만 남았을 때 비로소 인수 표현식들을 평가한다
-> 6 * 6 + 10 * 10
-> 36 + 100
-> 136
```
- 치환 모형으로 평가할 수 있으며, 적법한(legitimate) 값들을 산출하는 함수 적용의 경우 정상 순서 평가와 인수 우선 평가가 같은 값을 산출함을 증명하는 것이 가능하다.

## 조건부 표현식(conditional expression)
```javascript
// 술어 ? 귀결-표현식 :대안-표현식

function abs(x) {
  return x >= 0 ? x : -x; // 조건부 표현식
}
```
- 조건부 표현식을 평가할 때 해석기는 먼저 표현식의 술어를 평가한다.
  - 술어가 참으로 평가되면 귀결 표현식(consequent expression)을 평가해서 그 값을 조건부 표현식 전체의 값으로서 돌려준다.
  - 술어가 거짓으로 평가되면 대안 표현식(alternative expression)을 평가해서 그 값을 조건부 표현식 전체의 값으로서 돌려준다.
  
사례가 여러 개인 사례 분석 구조를 자바스크립트에서는 다음처럼 대안 표현식들이 다른 조건부 표현식 안에 있는 형태로 중첩된 표현식으로 표현할 수 있다.
```javascript
function abs(x) {
  return x > 0
         ? x
         : x === 0 // 조건부 표현식 구문형은 오른쪽 결합이다.
         ? 0
         : -x;
}
```

사례 분석 구조의 일반적인 형태는 다음과 같다.
```javascript
/*
p1
? e1
: p2
? e2
...
: pn
? en
: 최종-대안-표현식
*/
```
## 예제: 뉴턴 방법으로 제곱근 구하기
- 수학: 선언적 서술 - 이것은 무엇인가?
  - ex) 제곱근 함수의 정의: $\sqrt{x} = y \geq 0$이고 $y^2 = x$라는 조건을 충족하는 $y$
- 컴퓨터: 명령적 저술 - 어떻게 하는가?
  - ex) 제곱근 함수: 제곱근을 어떻게 구할 수 있는가

```javascript
function sqrt_iter(guess, x) {
  return is_good_enough(guess, x)
         ? guess
         : sqrt_iter(improve(guess, x), x);
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function is_good_enough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function sqrt(x) {
  return sqrt_iter(1, x);
}
```