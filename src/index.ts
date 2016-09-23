/**
 * Using ES6 features,
 * 'tsc' builds fine,
 * VS-Code complains :(
 */

const foo: Map<string, string> = new Map([
  ["foo", "foo"],
  ["bar", "bar"],
]);
const bar: Set<string> = new Set(["foo"]);
const p = new Promise();
