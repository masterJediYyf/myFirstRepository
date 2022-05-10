var a = 'window';

var foo  = {
a: 'foo',
getA:() => {
  console.log(this.a, this)
},
getA1() {
console.log(this.a)
},
getA2: function() {
(() => { console.log(this.a) })()
}
}

var a;
var foo = {};

a = 'window';

foo.getA(); // 
foo.getA1(); // 
foo.getA2(); // 