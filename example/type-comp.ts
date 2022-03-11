// 인터페이스
interface IDeveloper {
  name: string;
  skill: string;
}

interface IPerson {
  name: string;
}

//NOTE: 타입호환 - 작은타입에 큰타입을 넣는 것은 가능
var developer: IDeveloper;
var person: IPerson;
// developer = person; // X
person = developer; // O

// 함수
var _add = function(a: number) {
  // ...
}
var _sum = function(a: number, b: number) {
  // ...
}
_sum = _add; // O
// _add = _sum; // X

// 유니온 타입
var c: IDeveloper | IPerson;
var d: IPerson | string;
// c = d; // X
d = c; // O

// 제네릭
interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // OK, because y matches structure of x

interface NotEmpty<T> {
  data: T;
}
let x1: NotEmpty<number>;
let y1: NotEmpty<string>;

// x1 = y1;  // Error, because x and y are not compatible