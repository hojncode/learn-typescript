// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

/** NOTE: 타입 별칭과 인터페이스의 차이점
 * 타입의 확장 가능 / 불가능 여부
 * 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능
 * 따라서, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천
 */

// #1
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
type Student = {
  name: string;
  age: number;
};

function getPerson(): Student {
  // ...
  return {
    name: 'seoYoung',
    age: 28
  }
}

// #3
type Hero = {
  skill: string;
}

const captain: Hero = { 
  skill: 'throwing a shield' 
}