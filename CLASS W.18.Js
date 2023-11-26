Part One
// Recursion
// Task 1
// function recurse(sum){
//     if(sum==0){
//         return 0
//     }
//     return sum + recurse(sum-1)
// }
// console.log(recurse(5))
// console.log(recurse(1))
// console.log(recurse(12))


// Task 2
// function factorial (a){
//   if (a == 1) return 1 
//   return a * factorial (a-1)
// }
// console.log (factorial (5))
// console.log (factorial (4))
// console.log (factorial (2))


// Task 3
// function doubleFactorial (a){
//   if (a <= 1) {
//     return 1 
//   }
//   return a * doubleFactorial(a - 2);
// }
// console.log (doubleFactorial (0))
// console.log (doubleFactorial (2))
// console.log (doubleFactorial (9))


// Task 5
// function fibonacci (num){
//   if (num <2) return num
//   return fibonacci (num-1) + fibonacci (num-2)
// }
// console.log (fibonacci (5))
// console.log (fibonacci (4))
// console.log (fibonacci (2))


// Task 6
// function sum(n){
//     if(n<=0) return 0
//     return n%10+sum(Math.floor(n/10))
// }
// console.log(sum(111))
// console.log(sum(222))
// console.log(sum(333))


// Task 7
// function num(a,b=10){
//     if(b==0){
//         return 0
//     }
//     return b*a + num (a,b-1)
// }
// console.log(num(1))
// console.log(num(6))
// console.log(num(9))


// Task 8
// function evenRecursion (a){
//     if (a < 0) a = -a
//     function evenRecursion (a) {
//         if (a == 0) return true
//         else if (a == 1) return false
//         else return evenRecursion (a - 2)
//     }
//     return evenRecursion (a);
// }
// console.log (evenRecursion(124))
// console.log (evenRecursion(-41))
// console.log (evenRecursion(16))


// Task 9
// function createMultiplier (a){
//   return function (b){
//     return a*b
//   } 
// }
// const double = createMultiplier (2)
// console.log (double(5))
// console.log (double(10))


// Task 10
// function incrementBy (a){
//   return function (b){
//     return a+b
//   }
// }
// const addFive = incrementBy (5)
// console.log (addFive(10))
// const addFifteen = incrementBy (15)
// console.log (addFifteen(10))


// Task 11
// function createAdder (a){
//   return function (b){
//     return a+b
//   }
// }
// const add5 = createAdder (5)
// console.log (add5 (3))
// console.log (add5 (7))
// console.log (add5 (-5))


// Task 12
// function product (a1,b1){
//     return function (a2,b2){
//         return function (a3,b3){
//             return a1*a2*a3 + b1*b2*b3
//         }
//     }
// }
// console.log(product(1,2)(1,1)(2,3))
// console.log(product(10,2)(5,0)(2,3))
// console.log(product(1,2)(2,3)(3,4))


// Task 13
// function makePassword (n){
//     return function (m){
//         if(n==m){
//             return true
//         }
//         else return false 
//     }
// }
// let sendPassword = makePassword ("softClub")
// console.log(sendPassword("intellect"))
// console.log(sendPassword("softClub"))
// console.log(sendPassword("hello"))


// Task 14
function sum(a = 0) {
//   return function (b = 0) {
//     return function (c = 0) {
//       return function (d = 0) {
//         return function (e = 0) {
//           return function (f = 0) {
//             return a + b + c + d + e + f
//           }
//         }
//       }
//     }
//   }
// }
// console.log(sum(2)(3)(4)()()(6))
// console.log(sum(2)()()(2)(2)(1))
// console.log(sum(1)()(4)()()(6))

__________________________________________________________________________________________
Part Two

// 1
// function doubleChar(a){
//     let res = ""
//     for(let i=0; i<a.length; i++){
//         res += a[i].replace(a[i], a[i]+a[i])
//     }
//     return res
// }
// console.log(doubleChar("String"));


// 2
// function sevenBoom (a){
//     if(a.includes('7')){
//         return "Boom";
//     }
//     return "Not Boom";
// }
// console.log(sevenBoom("1,2,3,4,5,6,7,8"));


// 3
// function removesNumbers (str){
//     return str
//       .replaceAll(1, "")
//       .replaceAll(2, "")
//       .replaceAll(3, "")
//       .replaceAll(4, "")
//       .replaceAll(5, "")
//       .replaceAll(6, "")
//       .replaceAll(7, "")
//       .replaceAll(8, "")
//       .replaceAll(9, "")
//       .replaceAll(0, "");
// }
// console.log(removesNumbers("mubashir1"));


// 4
// function reverse(a) {
//   let res = a.split("");
//   let rev = "";
//   for (let i = res.length - 1; i >= 0; i--) {
//     if (res[i] == res[i].toUpperCase()) {
//       rev += res[i].toLowerCase();
//     }
//     if (res[i] == res[i].toLowerCase()) {
//       rev += res[i].toUpperCase();
//     }
//   }
//   return rev;
// }
// console.log(reverse("Hello World"));


// 5
// function reverse(a) {
//     let res = a.split("");
//     let rev = "";
//     for(let i = 0; i < res.length; i++) {
//         if(res[i] != res[i+1]){
//             rev += res[i]
//         }
//     }
//     return rev
// }
// console.log(reverse("hello"));


// 6
// function createCounter(n=0){
//     return function Counter(m=1){
//         return (n+=m)
//     }
// }
// const counter1 = createCounter()
// console.log(counter1());
// console.log(counter1());


// 8
// function sumCubes(n){
//     if(n==0){
//         return 0;
//     }
//     return Math.pow(n, 3) + sumCubes(n-1);
// }
// console.log(sumCubes(3));


// 9
// function factFact(n){
//     let cnt = 1
//     if(n == 1){
//         return 1
//     }
//     for(let i = 1; i <= n; i++){
//         cnt *= i
//     }
//     return cnt * factFact (n - 1)
// }
// console.log(factFact(4));


// 10
// function longestWord(a) {
//   let mx = -9999,
//     cnt = "";
//   let res = a.split(" ");
//   for (let i = 0; i < res.length; i++) {
//     if (res[i].length > mx) {
//       mx = res[i].length;
//       cnt = res[i];
//     }
//   }
//   return cnt;
// }
// console.log(longestWord("Hello darkness my old friend"));
