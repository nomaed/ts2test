import * as angular from 'angular';

angular.module('foo', []);

const foo: Map<string, string> = new Map([
  ["foo", "foo"],
  ["bar", "bar"],
]);
const bar: Set<string> = new Set(["foo"]);
