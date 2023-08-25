// Task 1
// function modifyLast(n,m) {
//     let c = n.at(-1)
//     let d = c.repeat(m-1)
//     return n.concat(d)
// }
// console.log(modifyLast("Hello",3))
// console.log(modifyLast("Hey",6))
// console.log(modifyLast("excuse me what?", 5))

// Task 2
// function firstLast(n){
//     let a = n.at(0)
//     let b = n.at(-1)
//     return a.concat(b)
// }
// console.log(firstLast("ganesh"))
// console.log(firstLast("shiva"))
// console.log(firstLast("vishnu"))

// Task 3
// function toIn(n){
//     let m = Number(n)
//     return typeof(m)
// }
// console.log(toIn("77"))

// function toIn(n) {
//   let m = String(n)
//   return typeof(m)
// }
// console.log(toIn(77))

// Task 4
// function isPlural(n){
//     if(n.at(-1)=="s") return true
//     else return false
// }
// console.log(isPlural("changes"))
// console.log(isPlural("change"))
// console.log(isPlural("dudes"))

// Task 5
// function reverseCapitalize (str){
//     let b =""
//     for (let i=str.length-1; i>=0; i--){
//         b += str[i].toUpperCase()
//     }
//     return b
// }
// console.log(reverseCapitalize("abc"));
// console.log(reverseCapitalize("hellothere"));
// console.log(reverseCapitalize("input"));

// Task 6
// function checkEnding(a,b){
//     let c = a.includes(b)
//     return c
// }
// console.log(checkEnding("abc","bc"))
// console.log(checkEnding("abc","d"))
// console.log(checkEnding("feminine","nine"))

// Task 7
// function checkPalindrome (a){
//     let b =""
//     for (let i=a.length-1; i>=0; i--){
//         b += a[i]
//     }
//     if (a==b) return true
//     else return false
// }
// console.log(checkPalindrome("mom"))
// console.log(checkPalindrome("hscary"))
// console.log(checkPalindrome("reviver"))

// Task 8
// function charCount(a,b){
//     let cnt =0
//     for (let i=b.length-1; i>=0; i--){
//         if(a==b[i]) cnt++
//     }
//     return cnt
// }
// console.log(charCount("a", "edabit"))
// console.log(charCount("b", "big fat bubble"))

// Task 9
// function capToFront(n){
//     let a = ""
//     let b = ""
//     for(let i=0; i<=n.length-1; i++){
//         if(n[i] == n[i].toUpperCase()){
//             a += n[i]
//         }
//     }
//     for (let i=0; i<=n.length-1; i++) {
//       if (n[i] == n[i].toLowerCase()) {
//         b += n[i];
//       }
//     }
//     return a.concat(b)
// }
// console.log(capToFront("hApPy"))

// Task 10
// function reverseAndNot(n){
//     let a =""
//     for(let i=n.length;i<=0;i--){
//         a+=n[i]
//     }
//     return a.concat(n)
// }
// console.log(reverseAndNot(123));

//Task 10
// function rev(a){
//     let b=String(a)
//     let c=b.split("").reverse().join("")
//     return c.concat(b)
// }
// console.log(rev(123));
