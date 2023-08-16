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
