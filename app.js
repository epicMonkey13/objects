const numArray = [1, 2, 3, 4, 5];

function sumArray(params){
  let sum = 0;
  params.forEach((element) => {
    sum += element;
  })
  return sum;
}
console.log(sumArray(numArray));


const array1 = ['a', 'b', 'c'];

array1.forEach(element => {
  console.log(element);
});

const numArray1 = [1, 2, 3, 4, 5];

function sumArray1(params){
  let sum = 1;
  params.forEach((element) => {
    sum = sum * element;
  })
  return sum;
}
console.log(sumArray1(numArray));

const studentGrades = [70, 20, 53, 64, 78, 60, 32]
function passedGrades(studentGrades){
  let sum1 = [];
  studentGrades.forEach((element) => {
    if (element > 50){
      sum1.push(element);

    }
  })

  return sum1
}
console.log(passedGrades(studentGrades));

const studentNames = ["Ab", "Tom", "John"];
console.log(studentNames.join(" "));

function toCSV(params) {
  return params.join(", ")
}
console.log(toCSV(studentNames));

const Kilometres = [50, 60, 80, 90, 52, 63];
function toMiles (km) {
  return km.map((element) => element * 0.621371);
}
console.log(toMiles(Kilometres));


const ages = [25, 36, 15, 65, 18]
function canVoteCheck (agesArray) {
  const overEighteen = agesArray.filter((element) => element >= 18)
  return overEighteen;
  
}
console.log(canVoteCheck(ages));


const numArray2 = [5, 6, 7, 9, 8, 2]

function productArray(allArray){
  return allArray.reduce((total, current) => {
    return total * current;
  }, 1)
}
console.log("product of array " + productArray(numArray));
//objects

 const user = {
   firstName: "Des",
   lastName: "Walker",
   age: 56,
 };

 const student = {
  firstName: "Tom",
  lastName: "Walkers",
  age: 51,
  address: "SomeStreet",
  email: "tom@gmail.com",
  jobs: [{jobname: "cook"}, {jobname: "accountant"}]
 };

 console.log(student["firstName"]);
 console.log(student.age);
 console.log(student.jobs);
 student.firstName = "Fred";
 

 const users = [
   {userName: "Del01", password: "11111", email: "mailss@Ggdde.com"}, 
   {userName: "Del02", password: "12111", email: "maiss@Ggdde.com"}
 ]

 

 const spaceCraft = 
   {
     size: "big",
     range: "10000000 miles",
     model: "Ghf1",
     capacity: "158"
   }

 console.log(spaceCraft.range);
for (const key in spaceCraft) {
  if (spaceCraft.hasOwnProperty.call(spaceCraft, key)) {
    const element = spaceCraft[key];
    console.log(key + " : " +spaceCraft[key]);
  }
}

const ageNumber = 90;
const fname = "Brady";
const userNew = [10, "Tom", "Test", 90, "first"];

function errorMsg(params){
  return params.forEach(element => {
    try {
      return console.log(element.toUpperCase());
    } catch (error) {
      return console.log(element + " is not a string");
    }
  });
}
errorMsg(userNew);

