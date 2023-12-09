
// 1
// function getMiddle(n) {
//   if (n.length % 2 == 0) {
//     return n.slice(1, 3);
//   } else {
//     return n.slice(0, 1);
//   }
// }
// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("A"));

// 2
// function arr ( n , m , a ){
//     let sum = []
//     for ( let i = 0 ; i < a.length ; i++ ){
//         if ( a [ i ] > n && a [ i ] < m ){
//             sum.push ( a [ i ])
//     }
// }
// return sum
// }
// console.log( arr ( 3 , 8 , [ 1 , 5 , 95 , 0 , 4 , 7 ] ) );.

// 3
// function invert(obj){
//     let obj2 = {}
//     for(let keey in obj){
//         let value = obj[keey];
//         obj2[value] = keey
//     }
//     return obj2
// }
// console.log(invert({"z":"q","w":"f"}));
// console.log(invert({"a":1,"b":2,"c":3}));

// 4
// function check ( a ) {
//     for ( let i = 0 ; i < a.length ; i++ ){
//         if ( Math.pow(Math.sqrt (a [ i ]),3) == a [ i + 1 ] ){
//             return true
//         }
//     }
//     return false
// }
// console.log(check([4, 8]));
// console.log(check([16, 48]));
// console.log(check([9, 27]));

// 5
// function maxmumscore(a) {
//   return a.reduce((x, y) => {
//     return x + y.score;
//   }, 0);
// }
// console.log(
//   maxmumscore([
//     { tile:"n", score: 1 },
//     { tile: "k", score: 5 },
//     { tile: "z", score: 10 },
//     { tile: "z", score: 8 },
//     { tile: "d", score: 2 },
//     { tile: "a", score: 1 },
//     { tile: "e", score: 1 },
//   ])
// );

// 6
// function most(obj){
//     let max = Math.max(...Object.values(obj));
//     return Object.keys(obj).find(key => obj[key]===max);
// }
// console.log(most({piano:2000}));
// console.log(most({piano:200,tv:1000}));

// 7
// function Ieap(n) {
//   let res = new Date(n, 2, 0);
//   return res.getDate() == 29;
// }
// console.log(Ieap(1988));
// console.log(Ieap(1993));
