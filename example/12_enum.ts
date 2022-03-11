// EXAMPLE: enum 예제
enum Answer {
    Yes = 'Y',
    NO = 'N',
}

function respond(message: Answer): void {
    console.log(message);
}

respond(Answer.Yes);
  //respond('Y'); - 에러

// NOTE: 런타임 시점에서의 이넘 특징: 런타임시에 실제 객체 형태로 존재
enum E {
    X, Y, Z
}

function getX(obj: { X: number }) {
    return obj.X;
}
getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작

// NOTE: 컴파일 시점에서의 이넘 특징: 일반적으로 keyof를 사용해야 되는 상황에서는 대신 keyof typeof를 사용
enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');