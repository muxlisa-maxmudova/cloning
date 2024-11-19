// let x = 9;
// let y = x;
// y=y+9
// console.log(x)
// console.log(y)

const number = {
    x:4,
    y:8,
}
const newNumber = number
newNumber.y= 10
console.log(newNumber)
console.log(number) //shallow [cloning] (=duplicating)

const Emily = {
    address:'Long street, house 12',
    areTheyGood:true
}
const family = Emily
family.address = 'Short street, house 62'
delete family.areTheyGood
console.log(family, 'changed')
console.log(Emily, 'original')//again shallow cloning
// when we clone shallowly we can see that original object
// was affected by the changes of our new object

 function solve(obj){
    let newObj = {}
     for(let key in obj){
         newObj[key] = obj[key]
     }
     return newObj
}
 const n = {
     s: 34,
     b: 24,
     x:{
         a:2,
         c:3
     }
 }
const newN = solve(n)
newN.b= 56
n.b= newN.s + 12
newN.x.c = n.b+newN.s // but here we face shallow cloning
// console.log(n)
// console.log(newN) // now this time we can see how our
// objects are cloned 'deeply', to be exact any changed
// variable in any of these objects is not affect by one
// another as in the shallow cloning;


const n1 = {
    s: 34,
    b: 24,
    x:{
        a:2,
        c:3
    }
}

const newN2 = Object.assign({}, n1, n1.x)
n1.x.c=2*n1.x.c
console.log(newN2)
console.log(n1)
// Object.assign can not make deep clones only if we
// have object inside the objects



const n2 = {
    x:9,
    y:8
}
const n3 ={
    u:0,
    o:n2.x*n2.y
}
let all =  Object.assign(n2, n3)
console.log(all)

const keys = ['Enter', 'Shift', 1, 'tab' ]
const numbers = keys.slice()
keys[0]= 'Ctrl'
numbers[3] = 'git'
console.log(keys)
console.log(numbers) // => deep cloning obviously, since
// changes given for one 'massive' is not affecting
// the other



const c2 = [1,3,4,5,6]
function c (x,y,z,t) {
    console.log(x+y+z-t)
}
c(...c2)
// ... - is spread operator its function can be perfectly
// represented in the next example

const mums = ['cat', 'lion', 'cow']
const kids = ['kittens', 'cubs', 'calves']
let a = [...mums, ...kids]
console.log(a)















