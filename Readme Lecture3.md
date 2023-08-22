# Table of Contents 
```sh
1 String
2 Namber
3 Array
4 Destructuring
5 Spread & Rest
```

# What is a Method in java script ?
> A method is a block of code which only runs when it is called. 
> You can pass data, known as parameters, into a method. 
> Methods are used to perform certain actions, and they are
> also known as functions.

## String in Javascript
```sh
1) "Hi"
2) 'Hi'
3) `Hi ${hi}`
```

# String Methods :
```sh
charAt () indexi text ro navista elementi ki indexash durust boshad nishon medihad va raqami minusa namegirad .
at () monandi charAt hast neki bo in farq ki in metod raqami minusa megira va kor mekunad .
concat () chan tai ki element boshad ro ba yak digar mechasponad .
replace () 2 ta parametr megirad text khostagi mo ro alosh mekunad 1parametr kalimai ki dar text hast 2parametr
chizi ki mo mekhohem alish shavad va yakum yoftagi ro alish mekunad .
replaceAll () monandi replace act amo in metod tamomi text ho ro ki mo mekhohem kofta va tabdil mekunad .
split () agar be parametr boshad hamai elementi mo ro yak ta masiv karda medihad [] bo parametr ham kor mekunad .
substring () start , end dorad 2 parametr megirad be parametr kor namekna raqami minusa namegirad .
slice () start , end dorad 2 dona parametr megirad raqami minusa da kor mekunad .
toLowerCase () parametr namegirad tamomi harf hoi kaloni text mo ro ba maida megardonad .
toUpperCase () parametr namegirad tamomi harf hoi khurdi text mo ro ba kalon megardonad .
trim () prabeli lishni ro az 2 tarafi text udalit mekunad . 
includes () parametr megira 2 javob dora true , false agar parametri mo da tugri girad true bar megardonad .
tostring () parametr namegira tamomi metod hoi moro ba string megardonad 
indexOf () 1 dona parametr megirad indexi ki dar parametr menavisem ro ba mo meguyad ki chandum index ast .
repeat () 1,2,3... chand parametri ki navisem ro takror kardan megirad 
⭐️ Length darozi harf ho ro hisob karda ba mo meguyad va be () ast .
```
# Number Methods :
```sh
Math.round ()  ->  3.87 = 4
Math.ceil ()   ->  4.3  = 5
Math.floor ()  ->  38.8 = 38
Math.max ()    ->  (12,3,6,5,4,8,9) = 12
Math.min ()    ->  (12,3,6,5,4,8,9) = 3
Math.pow ()    ->  (2,2) = 4  ba daraja mebardorad
Math.sqrt ()   ->  (16)  = 4 az resha mebrora
Math.abc ()    ->  -2 = 2   ,   -5 = 5   ,   -3 = 3
Math.random () -> random()*10 = 4.051126874036138
⭐️ isNaN = javobi ba dast omadagi mo agar NaN boshad true ba mo barmegardonad naboshad false bar megardonad .
```
# What is Array in Javascript ?
> Array : kalecsiya hoi ki hama namud znacheni hoyashon hast hato khudi Array .
# Array Methods :
```sh
push () masiv asosi ro alish mekunad az okhir masiv yagon element izofa mekunad .
pop () yagon parametr namegira az okhiri masiv element ro udalit mekunad va masiv asosi ro alish mekunad .
unshift () az avali masiv element ro izofa mekunad va masivi asosi ro alish mekunad .
join () faqat metod array ast monan string ast bo in farq ki in metod parametr megirad va masiv asosi
ro alish namekunad .
splice () 3ta parametr megira (stard/delet/dabavit) masiv asosi ro alish mekunad .
forEach () yakta parametr megira kalbec , kalbeksh 3ta (element,index,arr) va return nadora.
map () yakta parametr megira kalbec , kalbeksh 3ta (element,index,arr) masiv asosi ro kor
nadora yak masivi nav ba mo medihad .
find () yak kalbek megira kalbeksh 3ta (element,index,arr) vobasta ba sharti mo avalin
javob ro ba mo barmegardonad .
filter () mekobad hamai element hoi ki mo da darkor ast ro yofta ba mo hamasha masivi nav karda medihad . 
```
