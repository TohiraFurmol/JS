// Task 1
// function isEmpty (a){
//     if (a=="") return true
//     else return false
// }
// console.log(isEmpty (""))
// console.log(isEmpty ("a"))

// Task 2
// function concatName (a,b){
//     let c = b.concat(", ",a)
//     return c
// }
// console.log(concatName ("Jhon", "Doe"));

// Task 3
// function oddOrEven(n){
//     if(n.length%2==0) return true
//     else return false
// }
// console.log(oddOrEven("apples"))
// console.log(oddOrEven("pears"))
// console.log(oddOrEven("cherry"))

// Task 4
// function isLastCharacterN(n){
//     if(n.at(-1)===`n`)return true
//     else return false 
// }
// console.log(isLastCharacterN("Aiden"))
// console.log(isLastCharacterN("Bert"))

// // Task 5
// function repeatString (a,b){
//     if (typeof (a) !== "string") return "Not a String"
//     else return a.repeat (b)
// }
// console.log (repeatString ("Mubashir", 2))
// console.log (repeatString ("Matt", 3))
// console.log (repeatString (1990, 7))

// Task 6
// function capitalLetetters (a){
//     let str = a.split("")
//     let cnt=0
//     for (let i=0; i<str.length; i++){
//         if (str[i] == str[i].toUpperCase()) cnt++
//     }
//     return cnt
// }
// console.log(capitalLetetters ("fvLzpxmgXSDrobbgMVrc"))
// console.log(capitalLetetters ("JMZWCneOTFLWYwBWxyFw"))
// console.log(capitalLetetters ("mqeytbbjwqemcdrdsyvq"))

// Task 7
// function calculate(a,b,c){
//     if(c=="+") return a+b
//     else if (c=="-") return a-b
//     else if (c=="*") return a*b
//     else if (c=="/") return a/b
//     else if (c=="%") return a%b
// }
// console.log(calculate(4,9,"+"))
// console.log(calculate(6,3,"*"))
// console.log(calculate(14,3,"%"))

// Task 8
// function numberSyllables(n){
//     let b = n.split("-")
//     return b.length
// }
// console.log(numberSyllables("buf-fet"))
// console.log(numberSyllables("beau-ti-ful"))
// console.log(numberSyllables("on-o-mat-o-poe-ia"))

// Task 9
// function evenOddString(n){
//     let b = ""
//     let c = ""
//     for(let i=0; i<n.length; i=i+2) b+=n[i]
//     for(let i=1; i<n.length; i=i+2) c+=n[i]
//     return b.concat(" ",c)
// }
// console.log(evenOddString("mubashir"))
// console.log(evenOddString("edabit"))
// console.log(evenOddString("airforce"))

// Task 10
// function potatoes(n){
//     return n.split("potato").length-1
// }
// console.log(potatoes("potato"))
// console.log(potatoes("potatopotato")

// Task 11
// function detectWord(n) {
//   let m = "";
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] == n[i].toLowerCase()) m += n[i];
//   }
//   return m;
// }
// console.log(detectWord("UcUNFYGaFYFYGtNUH"))
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"))
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))
