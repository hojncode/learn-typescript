//NOTE: any: 모든 타입 가능 -> any로 먼저 설정해두고 하나씩 바꾸는게 좋음
let todoItems: ITodo[];

// NOTE: 인터페이스 사용 - 객체 및 함수
interface ITodo {
  id: number,
  title: string,
  done: boolean,
}

interface ITodoFunc {
  (index: number, todo?: ITodo): void;
}

let deleteTodo: ITodoFunc;
deleteTodo = function (index: number): void {
  todoItems.splice(index, 1);
}

// api
function fetchTodoItems(): ITodo[] {
  return [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
}

// crud methods
function fetchTodo(): ITodo[] {
  return  fetchTodoItems();
}

//NOTE: void: 리턴 값이 없는 친구들
function addTodo(todo: ITodo): void {
  todoItems.push(todo);
}

function completeTodo(index: number, todo: ITodo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): ITodo {
  return todoItems[0];
}

function showCompleted(): ITodo[] {
  return todoItems.filter((item: ITodo) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(item1: ITodo, item2: ITodo): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo(item1);
  addTodo(item2);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();

const todo1 = { id: 4, title: '네번째', done: false };
const todo2 = { id: 5, title: '다섯번째', done: false };
addTwoTodoItems(todo1, todo2);

log();

// NOTE: 인터페이스 인덱싱
interface IStringArray {
  [index: number]: string;
}

let arr: IStringArray = ['a', 'b'];
arr[0] = 'c';
console.log(arr); // ['c', 'b']
// arr[0] = 10; -> 에러

interface IStringRegExDict {
  [key: string]: RegExp;
}

let obj: IStringRegExDict = {
  cssFile: /\.css$/,
  // jsFile: 123, -> 에러
}
obj['jsFile'] = /\.js$/;
Object.keys(obj).forEach(key => {
  console.log(key); // key => 자동 추론
})

// NOTE: 인터페이스 확장
interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}

const seoYoung: Developer = {
  name: 'um',
  skill: 'js',
}