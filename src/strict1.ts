
type TTest = { foofoo?: Array<string> } | undefined;

function testStrict(opt: TTest) {
  if (opt && opt.foofoo && opt.foofoo.length) {
    const localfoo = opt.foofoo;

    opt;
    opt.foofoo;
    opt.foofoo.length;
    localfoo; // ok
    localfoo.length; // ok

    [1].forEach(num => {
      opt;
      opt.foofoo;
      opt.foofoo.length;
      localfoo; // ok
      localfoo.length; // ok
    });

    [1].forEach(function (num) {
      opt;
      opt.foofoo;
      opt.foofoo.length;
      localfoo; // ok
      localfoo.length; // ok
    });

    (function () {
      opt;
      opt.foofoo;
      opt.foofoo.length;
      localfoo; // ok
      localfoo.length; // ok
    })();
  }
}
