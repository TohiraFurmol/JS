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

### How should a programming training course be ?
```sh
String programming is always evolving.
20 years ago, no computer science student would have imagined that programming would progress like this.
But in recent years, programming has become a hot topic in the world of technology,
and with the evolution of computer programming languages, it is clear that there will be certain programming languages.
New programming languages have replaced the old ones and it will be beneficial for people to take programming courses
and learn
programming
professionally to really flourish in the world of technology.
```
### Choosing a programming training course :
```sh
You must have seen people who talk about programming classes and say that programming
courses are hard and difficult and in the end they talk about their failure and even withdrawing from those classes.
A good reason to be afraid of participating in a There is a programming course if your level of computer knowledge is
lower than the course.
People who tell these stories usually make mistakes in choosing programming courses
```
### When choosing a programming training course, you should think about three things :
- Your computer knowledge level and course level
- Applicability of course topics. 3-Achieving a competitive advantage in the field of employment after the end of the course

### Before choosing a programming course, measure the level of applicability and the competitive advantage of the
course.
```sh
For example, ask yourself which courses are more compatible with my level of knowledge or if I can use what
I have learned after finishing the course?  Will my current course give me a competitive advantage?  In addition
to these three things, programming training courses should have a set of features in order to provide better training to
trainees.
```
### A programming training course should teach hard and soft skills simultaneously 
```sh
Having a complete set of hardware skills such as JAVA, Python and C++ is necessary but not sufficient for programmers.
Some people become a successful programmer more than others through their lifestyle, previous job, talents or
environment.  Why is this so?  It seems that just learning specific programming languages   does not make a
successful programmer.
```
> When most people are looking for a programming course, they only consider learning programming languages, but successful programmers
> have participated in courses that, in addition to hardware skills, have also taught some other features in the courses.
> So a programming training course should teach soft and hard 
> skills at the same time. "Hard skills" refer to measurable abilities that are developed over time through practice or study.
> On the other hand, "soft skills" 
> are the abilities that enable people to fit in the workplace or work effectively with others.
> A programmer's skills often combine creativity with technical and analytical elements.
> In many ways, programming represents the perfect integration of art and science.
> Some of the most important features of a 
> programming training course are :
1- Having experienced teachers
```sh
One of the important features of any training course is having experienced and high-level professors.
Programming is not only an exception to this rule, but considering the nature of this field, having an experienced
professor is doubly important.
```
2- Learning programming languages   (hard skills)
```sh
The code is written in programming languages such as C++, SQL, Java, or Python.
Programmers are not expected to know every available programming language, but having skills in at least two
Language will be useful to increase job opportunities. Most programmers usually choose their specialized field and
then learn the programming language that is most suitable for that field, so a programming course should create
skills in programming languages in you.
learning programming languages : Before choosing a course, you should be aware of the languages taught in the course.
```
3- Teaching problem solving skills
```sh
If you want to write a code, sometimes things go wrong.  This happens a lot and is normal.
A big part of the coding process is trial and error.  There are people who find this very frustrating.
Code is often written to solve a problem.  You must have the ability to identify problems and provide the most
efficient ways to solve them through programming. Problem solving is not a skill that is inherent or present in
us from birth. Problem solving is a skill that can be taught and learned.
```
4- Training related to learning concepts and applying them to other problems
```sh
The ability to learn concepts and apply them to other problems is a fundamental skill of programmers.
This is especially useful when writing Cascading Style Sheets (CSS), where styles are applied to the top level
of a web page and then applied to other elements on the page.
```
5- Practicality
```sh
One of the features of programming training courses is job search methods.
It is true that training courses focus on teaching programming, but it seems that application of training
should be part of the course program.
```
6- Teaching communication skills
```sh
Programmers usually spend most of their time working alone in front of a computer.
However, many situations require you to communicate with other programmers and team members,
especially when working on large or complex projects.  Excellent communication skills enable you
to work effectively with others and share ideas and solutions.  Communication is an important element
in programming - you need to communicate with customers, other departments, or even other colleagues who have
different degrees of experience in a particular subject.  Good communication skills are directly related to
growth and development skills. A great programmer is able to clearly understand problems, break them down into
hypotheses, and propose solutions coherently.
```
7- Compatibility and up-to-dateness
```sh
Working on projects that don't change from the first day to the end is a bit like a kind of stagnant programming.
The requirements and scope of the project in programming are always changing.
This is the part of the job that makes it so exciting.  Agile project management,
which has become very popular in recent years, is all about adapting to change.
You have to be willing and able to handle it as a programmer.


Programming, like almost all jobs related to computer technology, is prone to very rapid changes.
Not only does technology evolve at a breathless pace, but trends also change, sometimes you have to be
willing to learn new things within a few months.  This means to refresh and update your skills according
to the market and the whole technology at regular intervals.  This is a critical skill for becoming a
successful programmer in the long run.  Try to enroll in classes that regularly update their courses
```
8- The training of time management and conscientiousness of an excellent programmer is very reliable. 
```sh
They have a strong work ethic and show up to meetings on time.
An important skill is the ability to estimate the amount of time needed to complete a task,
communicate this and deliver it.
```
9- Skills test
```sh
A programming course should have skill test sessions.  For example, simulate programming steps.
Give trainees a problem or scenario and see how they relate to the problem.
Or ask trainees to estimate how long they will need to program, and see what questions they ask about it.
A training course should not be just about teaching, find courses that are experimental.
```
