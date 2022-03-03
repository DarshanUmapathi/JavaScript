document.write("Examples of ES6 Operations" + "<br />");

document.write("1.LET and CONST and String Literals" + "<br />");

let nName = "Darshan Umapathi";
document.write(`Hello ${nName}` + "<br />");

document.write("1.ADD and Sub using arrow functions" + "<br />");

const num1 = 90;
const num2 = 10;
const num3 = (a, b) => {
  return a + b;
};
const num4 = (a, b) => {
  return a - b;
};
document.write(num3(num1, num2) + "<br />");
document.write(num4(num1, num2) + "<br />");

const nGreet = (name) => {
  return `Welcome, ${name}`;
};
document.write(nGreet(nName) + "<br />");

document.write("1.REST and SPREAD" + "<br />");

let obj1 = {
  fname: "Ranjan",
  lname: "Umapathi",
};
let obj2 = {
  age: 13,
};

let obj3 = {
  ...obj1,
  ...obj2,
};

document.write(JSON.stringify(obj3) + "<br />");
console.log(obj3);

document.write("5.Destructing" + "<br />");

let fullname = "John Van Dam";
let nameArray = fullname.split(" ");

console.log(nameArray);
document.write(JSON.stringify(nameArray) + "<br />");

// Old way of doing first last and middle is using [0],[1],[2]

// New way of doing first last and middle is using let [f,m,l] = fullname.split(" ");

let [f, m, l] = fullname.split(" ");
console.log(f + " " + l);
document.write(f + " " + m + "<br />");

let randArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let [a, , b] = randArray;

document.write(a + " " + b + "<br />");
console.log(a);

const person = {
  fName: "John",
  mName: "Van",
  lname: "Dam",
  age: 28,
};
// Note variable names need to be same
let { fName, lName, age } = person;
console.log(age);

document.write("Array Functions MAP, reduce etc" + "<br />");

// MAP function

let nArray = [1, 2, 3, 4, 5, 6, 7];
let updatedArray = nArray.map((items) => {
  return items * 2;
});
nArray.forEach((items) => console.log(items * 3));
document.write(updatedArray + "<br />");

// Second argument give the position

let updatedArray1 = nArray.map((items, i) => {
  console.log(`item at pos: ${i} is `, items);
  return items * 10;
});

document.write(updatedArray1 + "<br />");

const employee = [
  { name: "John kemp", age: 25, empId: 121 },
  { name: "Fred Gray", age: 27, empId: 122 },
  { name: "Aidan posh", age: 35, empId: 127 },
];

let employeeArray = employee.map((items, i) => {
  if (items.empId % 2 != 0) {
    console.log(items.name);
  }
  return { name: items.name, employeeId: items.empId };
});

console.log(employeeArray);
document.write(JSON.stringify(employeeArray) + "<br />");

const employees = [
  { name: "John kemp", exp: 5, empId: 121 },
  { name: "Fred Gray", exp: 27, empId: 122 },
  { name: "Aidan posh", exp: 35, empId: 127 },
];

let experience = employees.reduce((acc, item) => {
  //console.log(acc);
  //console.log(item.exp);
  return acc + item.exp;
}, 0);

console.log(experience);

const oddArray = nArray.filter((item) => {
  console.log(item);
  //return true;
  return item % 2 !== 0;
});

console.log(oddArray);

const emps = employees.filter((items) => {
  return items.exp < 7;
});

console.log(emps);

document.write("Classes in ES6" + "<br />");

// We use the class Keyword Here

class Person {
  constructor(name, birthYear, job) {
    this.name = name;
    this.yearOfBirth = birthYear;
    this.job = job;
  }
  // Methods for getting details about Person
  getDetails = () => {
    //return "Name: " + this.name + " " + "and age is : " + (2022-this.yearOfBirth) ;
    return `Name: ${this.name} and age is :  ${2022 - this.yearOfBirth}`;
  };
}

let res = new Person("John", 1950);
console.log(res.getDetails());

// Inherent

class Profession extends Person {
  constructor(name, birthYear, job, exp, type, lisence) {
    super(name, birthYear, job);
    this.exp = exp;
    this.type = type;
    this.lisence = lisence;
  }

  getExp = () => {
    return `Name: ${this.name} has a total of ${this.exp} in ${this.type}`;
  };
}

let pro = new Profession("John", 1951, "Pilot", 25, "commercial", "ACTIVE");
console.log(pro.getDetails());
console.log(pro.getExp());

const postlistPromise = new Promise((resolve, reject) => {
  $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
    console.log(data);
    resolve(data);
  }).fail((err) => {
    reject(err);
  });
});

const postidPromise = (data) =>
  new Promise((resolve, reject) => {
    console.log(data[0].id);
    $.get(
      `https://jsonplaceholder.typicode.com/posts/${data[0].id}`,
      (data) => {
        resolve(data);
      }
    ).fail((err) => {
      reject(err);
    });
  });

postlistPromise
  .then(postidPromise)
  .then((response) => console.log(response))
  .catch((error) => {
    console.log("Post Failed", error);
  });
