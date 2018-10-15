// Question 1
// const double = (num) => {
//   return num * 2
// }
//
// const square = (num) => {
//   return num * num
// }
//
// const doubleSquare = (num) => {
//   let doubled = double(num)
//   let result = square(doubled)
//   return result
// }
//
// console.log(doubleSquare(10))
/////////////////////////////////////////
//Question 2
// const classyGreeting = (firstName, lastName) => {
//    return 'Good morning, ' + `${firstName} ${lastName}` + '!'
// }
// // console.log(classyGreeting('Jung Rae', 'Jang'))
// const yell = (toCap) => {
//   return toCap.toUpperCase()
// }
//
// const yellGreeting = (firstName, lastName) => {
//    let greeting = classyGreeting(firstName, lastName)
//    return yell(greeting)
//  }
// console.log(yellGreeting('Jung Rae', 'Jang'))
///////////////////////////////////////////////
// Question 3
// const removeDupes = (arr) => {
//   let noDupes = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if(!noDupes.includes(arr[i])) {
//       noDupes.push(arr[i])
//     }
//   } return noDupes
// }
// // console.log(removeDupes([1, 2, 2, 3, 3, 4, 5, 6, 6, 1, 2, 7]))
//
// const concatAndRemoveDupes = (arr1, arr2) => {
//   let twoArr = arr1.concat(arr2);
//   return removeDupes(twoArr)
// }
// console.log(concatAndRemoveDupes([1, 2, 3, 4, 5], [2, 3, 6, 7, 8]))
/////////////////////////////////////////////////////
// Question 4
const sort = (arr) => {
return arr.sort(function(a,b){return a-b});
}

const middleElement = (arr) => {
  let middleEl = [];
  if(arr.length % 2 === 0) {middleEl.push((arr[(arr.length / 2) - 1]), (arr[(arr.length / 2)]))
  } else if ((arr.length % 2 !== 0)) {
    middleEl.push((Math.ceil(arr.length / 2)))
  }
return middleEl
}

const median = (arr) => {
let sorted = sort(arr);
let middleE = middleElement(sorted);
let median = middleE
if(middleE.length === 1) {
  cosoloe.log(middleE + ' is the answer.')}
  if(middleE.length === 2){
    console.log((middleE[0] + middleE[1]) / 2 + ' is the answer.')}
  }
median([91, 85, 100, 92, 88, 90])
///////////////////////////////////////////////////////
// Question 5
// const repeat = (str, num = 2) => {
// for(let i = 1; i <= num; i++) {
// console.log(str)
// }
// }
// repeat('Repeat This', 9)
/////////////////////////////////////////////////////////
Question 6
const sumOfAll = (...arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  } return sum
}
console.log(sumOfAll(1, 2, 3, 4, 5, 6, 10, 18))
///////////////////////////////////////////////////////////
Question 7
