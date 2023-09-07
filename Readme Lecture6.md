# SYNCHRONOUS :
> kodhoi mora khat ba khat mekhonad va taftish mekunad va jdat namekna vakte ki ba khatogi muvojeh megardad khondan ro bas karda khatogi ro nishon medihad.

# ASYNCHRONOUS : 
> code hoi moro to okhir khondan megirad joi ki darcor bosha ham jdat mekunad va vakte ki ba khatogi muvojeh megardad namesta va ba dalshi khondan megirad.


### Asynchronous code in JavaScript can be written using 
```sh
- callbacks,
- promises,
- async/await syntax.
```

```sh
1 callbacks,
function foo(calback){
  setTimeout(function(){
     calback('Hi')
  },2000)
}

foo (function(value){
   concole.log(value)
})
```

- 1 Fulfilled. 
- 2 Rejected.
- 3 promises, : (vada medihad) yak object ast ki vada medihad chize ba shumo object shuda medihad va az 3 holat megzara
> Pending : intizor mekashad agar ki kor kar dar Fulfilled (True) dokhil meshavad agar kor nakard da Rejected (False)
> dokhil meshavad va mega ki chida da Rejected aftoda ast .


```sh
1 Pending
function promise (url){
   return new Promise((resolve,reject)=>{
       fetch (url)
       .then((response)=>response.json())
       .then((data)=>resolve(data))
       .catch((erorr)=>resolve(erorr))
})
}
promise('https://63d14ale3f08e4a8ff94b1a5.mocapi.io/department')
.then((data)=>console.log(data))
```
