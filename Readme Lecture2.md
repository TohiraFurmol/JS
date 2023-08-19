# Table of Contents
- Scope
- Hoisting
- Recursion
- Closure


# What is Scope in JavaScript ?
> The scope is the current context of execution in which values and expressions
> are "visible" or can be referenced. If a variable or expression is not in the current
> scope, it will not be available for use. Scopes can also be layered in a hierarchy, 
> so that child scopes have access to parent scopes, but not vice versa.


### JavaScript has the following kinds of scopes :
-  Global scope
-  Function scope
-  Block scope
-  Module scope


#### Global scope 
```sh
const me = 'jony'
const job = 'teacher'
const year = '1989'
```


#### Function scope
```sh
function a(birthYear){
     const now = 2037
     const age = now - birthYear
     return age  
}
concole.log(now)
```


#### Block scope
```sh
if(year >= 1981 && year <= 1996){
      const millenial = true
      const food = 'Avocado toast'
}
concole.log(millenial)
```


# what is Hoisting in JavaScript ?

> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
> variables, classes, or imports to the top of their scope, prior to execution of the code.
>
> 
> Hoisting is a JavaScript mechanism where variables and function 
> declarations are moved to the top of their scope before code 
> execution.
>
> 
> Hoisting in JavaScript is a behavior in which a function or a variable 
> can be used before declaration.


```sh
function declarations                 Hoisted✅            Actual function           block scope

var variables                         Hoisted✅               undefined               Function

let and const variables             ❌not Hoisted                 TDZ                    Block
```



## Hoisting – Variable (var) 
```sh
a = 2
var a
console.log(a)
```


## Hoisting – function declaration
```sh
foo()
function foo(){
    console.log(a)
    var a = 2
}
```


### ⭐️Temporal dead zone, let and const⭐️

# what is Recursion in JavaScript ?
> Recursion is when a function calls itself until someone stops it.
```sh
function recurse(sum){
    if(sum==0){
        return 0
    }
    return sum + recurse(sum-1)
}
console.log(recurse(5))
```

# what is Closure in JavaScript ?
> A closure is the combination of a function bundled together (enclosed) with references to 
> its surrounding state (the lexical environment). In other words, a closure gives you 
> access to an outer function's scope from an inner function
```sh
function one(){
    return function second(){
        return "hello"
    }
}
console.log(one()())



function one(a) {
  return function second(b) {
    return function third(c){
        return a+b+c
    }
  }
}
console.log(one(1)(2)(3))

```
# Thanks That’s it ♥️ :)


> String programming is always evolving.
> New programming languages ​​have replaced the old ones and it will be beneficial for people to take programming courses and learn programming professionally
> to really flourish in the world of technology.
> A programming training course should teach both hard and soft skills at the same time.

##### How should a programming training course be ?
```sh
String programming is always evolving.  20 years ago, no computer science student would have imagined that programming would progress like this.  But in recent years, programming has become a hot topic in the world of technology, and with the evolution of computer programming languages, it is clear that there will be certain programming languages.  New programming languages   have replaced the old ones and it will be beneficial for people to take programming courses and learn programming professionally to really flourish in the world of technology.
```


