{
  /**
   * JavaScript
   * Primitive: number, string, boolean, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }
  // null
  let person = null; // 💩
  let person2: string | null;
  person2 = null;
  person2 = '2';

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never 함수에서 절대 리턴 되지 않을 때 그것을 명시 하기 위해 쓰임
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object;
  function acceptSomeObject(obj: object) {
    console.log(obj);
  }
  acceptSomeObject({ name: 'woo' });
  acceptSomeObject({ name: 'dog' });
}
