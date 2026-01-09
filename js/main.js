/*
let fname = ' jonh pork'

let age = '30 '
let height = '200'
const idcard = '123'
const pi = '3.14'

fname = 'tom'
idcard = '456'

console.log('idcard',idcard)
console.log('name',fname,'age',age)
console.log('age',age)
*/




/*
let number1  = 'rod'
let number2 = 'rit'
let number3 = number2 + number1

console.log( 'number3', number3)
*/




/*
let number1 = 5
let number2 = 3

let condition = number1 <= number2 (true,false)
console.log( 'condition is', condition
*/

/*
let number1 = 5
let number2 = 3

if (number1>= number2){
    console.log('this if')
} else if (number1 == number2){
    console.log('this else if')
} else {
    console.log('this else ')
}
*/




/*
let score = prompt('enter uour grade')
if (score >= 80 ){
    console.log('grade a')
}else if (score >=70 ){
    console.log('grade b')
}else if (score >=60 ){
    console.log('grade c')
}else if (score >=60 ){
    console.log('grade d')
}else {
    console.log('grade d')
}
*/


/*
let number1 = 5 
let number2 = 10

let condition =!(number1 >= 3 || number2 >=11)
console.log('result of condition',condition)
*/




/*
let counter = 0

while (counter <= 10 ) {
    console.log('hi')
    connter = counter + 1
}

for (let connter = 0; connter < 10; connter++){
    console.log('hi')
}
*/





/*
let age1 = 20
let age2 = 25
let age3 = 30

let ages =[20,25,30]

console.log('age1 age2 age3' ,age1,age2,age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array',ages)

console.log('index',ages[0])

ages.push(25)
console.log('push array',ages)

ages.pop()
console.log('pop array',ages)
*/


/*
let ages = [20,25,30,35,40]

if (ages.includes(30)){
    console.log(' have 30 in array')
}

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])

for (let index = 0; index < name_list.length; index++) {
    console.log('name list',name_list[index])
}
*/




/*
let student = [{
    age:30,
    name: 'aa',
    grade: 'A'
},{
    age:35,
    name: 'bb',
    grade: 'B'
}]

student.pop()

console.log(student)
console.log(student.age)
console.log(student.name)
console.log(student.grade)

for(let index = 0; index < student; index++){
        console.log('age',student[index].age)
        console.log('name',student[index].name)
        console.log('grade',student[index].grade)
}
*/


/*
let score1 = 55

function calculater_grade(score){
if (score>=80){
    grade = 'a'
}else if (score>=70){
    grade = 'b'
}else if (score>=60){
    grade = 'c'
}else if (score>=50){
    grade = 'd'
}else {
    grade = 'f'
}
return grade
}

let grade1 = calculater_grade(score1)
console.log('grade',grade1)
*/
/*
let score = [20,30,40,50]
for (let index = 0; index < score.length; index++){
    console.log('score',score[index])
    if(score[index] >= 30){
        newScore.push(score[index])
    }
}*/
/*
score[0] = score[0] * 2
score[1] = score[1] * 2
score[2] = score[2] * 2
score[3] = score[3] * 2
*/
/*
score = score.map((s) => {
    return s * 2
})

score.forEach((s) => {
    console.log('forEach score',s)

})
 */
/*
let newScore = score.filter((s) =>{
    return s >= 30

})

newScore.forEach((ns) => {
   console.log('newScore',ns)
})
*/

let students = [{
    name: 'aa',
    score: '50',
    grade: 'A'
},{
    name: 'bb',
    score: '80',
    grade: 'B'
}]

let double_score = students.map((s) =>{
    s.score = s.score*2
    return s
})
let student = students.find((s) => {
    if(s.name == 'aa'){
        return true
    }


})

let height

console.log(student)

console.log('double_score',double_score)