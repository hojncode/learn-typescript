function sum(a: number, b: number) {
    return a + b;
}

// sum('10', '20'); // Error: '10'은 number에 할당될 수 없습니다.

// NOTE: 메소드 자동완성 가능
let result = sum(10, 20)
result.toLocaleString();

// NOTE: js doc 으로 타입스크립트 같이 사용가능 하긴함
// @ts-check
/**
 * @param {number} a 첫번째숫자
 * @param {number} b 두번째숫자
 */
