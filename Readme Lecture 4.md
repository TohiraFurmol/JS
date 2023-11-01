# Table of Contents 
```sh
1) Object
2) Destructuring
3) Spread
4) This
5) New Date()
```

# Whats is Object in JavaScript ?
> In JavaScript, an object is a standalone 
> entity, with properties and type

# Methods object :
- Object.entries()
```sh
const obj = { name: "Tohira" , age: 20,}
console.log(object.entries(obj));
// Output : [ ['name' , 'Tohira'] , ['age' , 20] ]
```
- Object. keys()
```sh
const obj = { name: "Tohira" , age: 20,}
console.log(object.keys(obj));
// Output : ['name' , 'age']
```
- Object. values()
```sh
const obj = { name: "Tohira" , age: 20,}
console.log(object.keys(obj));
// Output : ['Tohira' , 20]
```
 # what is Destructuring and Spread in JavaScript ?
> The destructuring assignment syntax is a JavaScript expression that makes it 
> possible to unpack properties from object, into distinct variables

# what is keyword “ this ” in JavaScript ?
- in an object method, this refers to the object.
- Alone, this refers to the global object.
- in the function, this refers to the global object.
- in the function, in strict mode, this is undefined                                                                                                                   
（ ^.^ ）⭐️ this is NOT a variable. It is a keyword. You cannot change the value of this.

# what is new Date() in JavaScript ?
```sh
- new Date()
- new Date(miliseconds)
- new Date(Date string)
- new Date(year,month,day,hours,minutes,seconds,miliseconds)
```
### Method 
```sh
getFullYear() sol ro bar asosi zamon hozira daryoft mekunad .
getMonth() tibqi zamoni hozira moh ro az 0 to 11 daryoft mekunad .
getDate() ruzi moh ro bar asosi zamoni hozira daryoft mekunad .
getDay() ruzi hafta (0,6) bar asosi zamoni mahali daryoft mekunim .
getHours() soat ro tibqi zamoni hozira az 0 to 23 daryoft mekunad .
getMinutes() daqiqa ro tibqi zamoni hozira az 0 to 59 daryoft mekunad .
getUTCDate() ruz hoi moh ro ba mo barmegardonad.
setFullYear() ba asosi parametri mondagi mo kor mekunad va mo metavonem sol ro alish kunem .
setMonth() ba asosi parametri mondagi mo kor mekunad va mo metavonem moh ro alish kunem .
setDate() ba asosi parametri mondagi mo kor mekunad va mo metavonem ruz ro alish kunem .
setUTCDate()
```
