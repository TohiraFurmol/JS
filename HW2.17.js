// Task 1
// function equal(a,b,c){
//     let cnt = 0
//     if(a==b || a==c) cnt++
//     if(b==a || b==c) cnt++
//     if(c==a || c==b) cnt++
//     return cnt
// }
// console.log(equal(3, 4, 3))
// console.log(equal(1, 1, 1))
// console.log(equal(1, 4, 3))


// Task 2
// function suma(n){
//     let sum = 0
//     for(let i=1; i<=n; i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(suma(4))
// console.log(suma(13))
// console.log(suma(600))



// Task 3
// function factorial (a){
//   if (a == 1) return 1 
//   return a * factorial (a-1)
// }
// console.log (factorial (5))
// console.log (factorial (4))
// console.log (factorial (2))


// Task 4
// function sumEvenNumbers(n,m){
//     let sum = 0
//     for(let i=n; i<=m; i++){
//         if(i%2==0)
//         sum+=i
//     }
//     return `Sum of even numbers between ${n} and ${m} : ${sum}`
// }
// console.log(sumEvenNumbers(1,10))
// console.log(sumEvenNumbers(5,15))
// console.log(sumEvenNumbers(0,1))


// Task 5
// function calculatePower(n,m){
//     let sum = 1
//     for(let i=1; i<=m; i++){
//         sum*=n
//     }
//     return `${n}^${m}=${sum}`
// }
// console.log(calculatePower(2,4))
// console.log(calculatePower(3,3))
// console.log(calculatePower(2,2))



// Task 6
// function mean(n){
//     let sum = 0
//     let cnt = 0
//     for(let i=n; i>0; i= Math.floor(i/10)){
//         cnt++
//         sum+=i%10
//     }
//     return sum/cnt
// }
// console.log(mean(42))
// console.log(mean(12345))
// console.log(mean(666))


// Task 7
// function isPalindromeNumber(n){
//     let rev = 0
//     for(let i=n; i>0; i= Math.floor(i/10)){
//             rev=rev*10+i%10;
//         }
//         if(n==rev) return `${n} is a palindrome number`
//         else return `${n} is a not palindrome number`
    
// }
// console.log(isPalindromeNumber(121))
// console.log(isPalindromeNumber(1218))
// console.log(isPalindromeNumber(12))


// Task 8
// function countEvenOddDigits(n){
//     let even = 0
//     let Ood = 0
//     for(let i=n; i>0; i=Math.floor(i/10))
//     {
//         if((i%10)%2==0){
//             even++
//         }
//         else Ood++
//     }
//     return `Even digits: ${even}  Odd digits: ${Ood}`
// }
// console.log(countEvenOddDigits(12345))
// console.log(countEvenOddDigits(12))
// console.log(countEvenOddDigits(666))


// Task 9
// function findLargestDigit(n){
//     let max = -99999
//     for(let i=n; i>0; i=Math.floor(i/10)){
//         if(i%10>max) max = i % 10 
//     }
//     return max
// }
// console.log(findLargestDigit(87651))
// console.log(findLargestDigit(123))
// console.log(findLargestDigit(102309))


// Task 10
// function sumOfDigits(n){
//     let sum = 0
//     for(let i=n; i>0; i=Math.floor(i/=10)){
//         sum+=i%10
//     }
//     return Math.floor(sum)
// }
// console.log(sumOfDigits(12345))
// console.log(sumOfDigits(25))
// console.log(sumOfDigits(4554))
