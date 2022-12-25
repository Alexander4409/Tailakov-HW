//cd js
// node index

//task. Инициалы пользователя
const user1 = {
  firstName: "Sam",
  lastName: "Doe",
  age: 20,
};

const user2 = {
  firstName: "Charlie",
  lastName: "Fort",
  age: 31,
};

/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getIntials(user) {
  console.log(`"${user.firstName[0]}${user.lastName[0]}"`);
}

// Sample usage - do not modify
getIntials(user1); // "SD"
getIntials(user2); // "CF"

//task. Добавление чисел
const course1 = {
  name: "Learn English",
  isCompleted: true,
};

const course2 = {
  name: "Learn JavaScript",
  isCompleted: false,
};

/**
 * @param {Object[]} course
 * @param {number} count
 */
function addNumberOfChapters(course, count) {
  course.numberOfChapters = count;
  console.log(course);
}

// Sample usage - do not modify
addNumberOfChapters(course1, 80); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
addNumberOfChapters(course2, 60); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }

//task. Сумма оценок
const student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18],
};

/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
function getSumOfGrades(student) {
  const sumOfGrades = student.grades.reduce(
    (total, current) => total + current,
    0
  );
  console.log(sumOfGrades);
}

// Sample usage - do not modify
getSumOfGrades(student); // 75

//task. Имя пользователя
const users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  },
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
function getLastUserFullName(users) {
  console.log(`"${users[1].firstName} ${users[1].lastName}"`);
}

// Sample usage - do not modify
getLastUserFullName(users); // "Charlie Bon"

//task. Первая оценка студента
// Тут пришлось изменить константу с students на studentss т.к был конфликт при добавлении следуюшего задания
const studentss = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18,
    },
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19,
    },
  },
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} studentss
 */
function getFirstStudentGrade(studentss) {
  console.log(`${studentss[0].learnEnglish.grade}` * 1); //*1 использовалось чтобы верулось число а не строку
}

// Sample usage - do not modify
getFirstStudentGrade(studentss); // 18

//task. Сумма вложенных оценок
const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18,
    },
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19,
    },
  },
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
function getSumGrades(students) {
  const sumall = students
    .map((grades) => grades.learnEnglish.grade)
    .reduce((total, current) => total + current, 0);
  console.log(sumall);
  return sumall;
}

// Sample usage - do not modify
getSumGrades(students); // 37

//task. Имена пользователей
// конфликт при добавлении задания...
// изменение константы на userss...
const userss = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  },
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} userss
 */
function getFullNames(userss) {
  console.log(
    `[${userss[0].firstName} ${userss[0].lastName}, ${userss[1].firstName} ${userss[1].lastName}]`
  );
}

// Sample usage - do not modify
getFullNames(userss); // [Sam Blue, Charlie Bon]

//task. Имена пользователей
// попытка решение методом push() ...
// конфликт при добавлении задания...
// изменение константы на usersss...
const usersss = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  },
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} usersss
 */
function getFullNames(usersss) {
  const arrU = [];
  arrU.push(
    `${usersss[0].firstName} ${usersss[0].lastName}, ${usersss[1].firstName} ${usersss[1].lastName}`
  );
  console.log(arrU);
}

// Sample usage - do not modify
getFullNames(usersss); // [Sam Blue, Charlie Bon]
