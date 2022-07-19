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

  // null
  let person = null; // 💩
  let person2: string | null;
  person2 = null;
  person2 = '2';
}
