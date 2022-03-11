// function logMessage(value: string) {
//   console.log(value);
// }
// function logMessage(value: number) {
//   console.log(value);
// }
// function logMessage(value: any) {
//   console.log(value);
// }

// # NOTE: Union 타입 문법 - `any` 보다는 명시적임 : 타입가드시 메소드 등장
// function logMessage(value: string | number) {
//   console.log(value);
// }

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// NOTE: Union 타입 => 어떤 것이 들어올지 모르므로 공통된 속성만 접근가능
function askSomeone(someone: Developer | Person) {
  someone.name; // O
  // someone.age; // X
}

askSomeone({ name: '서영', skill: 'js' });
askSomeone({ name: '서영', age: 20 });

// NOTE: Intersection 타입 => 조합된 모든 속성만 접근가능
function askSomeone2(someone: Developer & Person) {
  someone.name; // O
  someone.age; // O
  someone.skill; // O
}

askSomeone2({ name: '서영', age: 20, skill: 'js' });