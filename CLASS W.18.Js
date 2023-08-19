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
