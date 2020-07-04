// var v = 1;
// function b(){
//     var v = 2;
//     function f(){
//         console.log(v);
//     }
//     f();
// }
// b();
// // 预解析
// var v;
// v = 1;
// function b(){
//     var v;
//     function f(){
//         console.log(v);
//     }
//     v = 2;
//     f();
// }
// b();


// var v = 1;
// function f(){
//     console.log(v);
// }
// function b(){
//     var v = 2;
//     f();
// }
// b();

// 预解析
var v;
function f(){
    console.log(v);
}
function b(){
    var v;
    v = 2;
    f();
}
v = 1;
b();
