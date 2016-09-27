import * as angular from "angular";

abstract class MyBase {
  public name = "Foo";
}

class MyComponent1 extends MyBase {
  public $onInit() {
    this.name = "BarBar";
  }
}

class MyComponent2 extends MyBase {
  public $onInit() {
    this.name = "MooMoo";
  }
}

function getComponentOptions(Ctrl: typeof MyBase) {
  const myComponent: angular.IComponentOptions = {
    template: `<div>Hi {{ctrl.name}}</div>`,
    controller: Ctrl,
    controllerAs: "ctrl"
  };
  return myComponent;
}

angular.module("testApp", [])
  .component("testEins", getComponentOptions(MyComponent1))
  .component("testZewi", getComponentOptions(MyComponent2));
