function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
// getValue<string>('hi').toLocaleUpperCase();
getValue('hi').toLocaleUpperCase();
// getValue<number>(100).toLocaleString();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Dev<T> {
  name: string;
  age: T;
}
const tony: Dev<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

interface IHasLength {
  length: number;
}

// NOTE: 속성가진 인터페이스 확장하여 사용
function getNumberAndArray2<T extends IHasLength>(value: T): T {
  value.length;
  return value;
}

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
// getAllowedOptions('nothing');
const a = getAllowedOptions('name');
a.toUpperCase(); // Name

// EXAMPLE: 제네릭 이용 예제
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: 'aaa@naver.com', selected: true },
  { value: 'bbb@naver.com', selected: false },
  { value: 'ccc@naver.com', selected: false }
]

const numProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false }
]
// 유니온 타입
function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  //..
}
// 유니온 타입을 제네릭으로 변경
function createDropdownItem2<T>(item: DropdownItem<T>) {
  //..
}

emails.forEach((email) => createDropdownItem(email))
numProducts.forEach((prd) => createDropdownItem(prd))

emails.forEach((email) => createDropdownItem2<string>(email))
numProducts.forEach((prd) => createDropdownItem2<number>(prd))