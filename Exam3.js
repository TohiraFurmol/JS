// 2
// function isUnique(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == arr[i+1]){
//             return false
//         }
//         return true
//     }
// }
// console.log(isUnique([1,2,3,4,5]));


// 3
// function sumOfEven(a){
//     let cnt = 0;
//     let res = Object.values(a)
//     for(let i=0; i<res.length; i++){
//         if(res[i]%2==0){
//             cnt += res[i]
//         }
//     }
//     return cnt
// }
// console.log(sumOfEven({a:2,b:5,c:8,d:3}));


// 4
// function longest(n){
//     let max = -99999,
//     suma = ""
//     let res = Object.values(n)
//     res.filter((el)=>{
//         if(el.length > max){
//             max = el.length
//             suma = el
//         }
//     })
//     return suma
// }
// console.log(longest({ name: 'John', city: 'New York', profession:'developer'}));


// 5
// function convert(obj){
//     let obj2 = {}
//     for(let keey in obj){
//         let value = obj[keey]
//         obj2[value] = keey
//     }
//     return obj2
// }
// console.log(convert({ a: "apple", b: "banana", c: "cherry" }));


// 6
// function average(n){
//     let min = 999999, max = -999999, sum = 0
//     let res = []
//     for(let i = 0; i < n.length; i++){
//         res.push(n[i].score)
//     }
//     for(let i = 0; i < res.length; i++){
//         if(res[i] > max){
//             max = res[i]
//         }
//         if(res[i]<min){
//             min = res[i]
//         }
//     }
//     return { highest: max, lowest: min, average :(max+min)/2};
// }
// console.log(
//   average([
//     { name: "Alex", score: 80 },
//     { name: "Emily", score: 95 },
//     { name: "Charlie", score: 88 },
//   ])
// );


// 8
// function combine(n,m){
//     return Object.assign(n,m)
// }
// console.log(combine({ a: 1, b: 2, c: 3 }, { b: 4, d: 5, e: 6 }));


// 9
// function capMe(n){
//     let res = []
//     for(let i=0; i<n.length; i++){
//         res.push(n[i].at(0).toUpperCase().concat(n[i].split(1)))
//     }
//     return res
// }
// console.log(capMe(['mavis', 'senaida', 'letty']));


// 10
// function squarePatch(a){
//     let cnt = a
//     let arr = [],arr2 = []
//     for(let i=0; i<cnt; i++){
//         arr.push(cnt)
//         arr2.push(arr)
//     }
//     return arr2
// }
// console.log(squarePatch(3));
