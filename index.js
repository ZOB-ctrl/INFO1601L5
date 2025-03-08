//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];



function getAverageGrade(student, course) {
  for (let c of student.transcript) {
      if (c.course === course) {
          let sum = 0;
          for (let grade of c.grades) {
              sum += grade;
          }
          return sum / c.grades.length;
      }
  }
  return -1;
}

function getAssignmentMark(student, course, num) {
  for (let c of student.transcript) {
      if (c.course === course) {
          return c.grades[num] !== undefined ? c.grades[num] : -1;
      }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;
  
  for (let student of students) {
      for (let c of student.transcript) {
          if (c.course === courseName) {
              if (c.grades[assignment] !== undefined) {
                  total += c.grades[assignment];
                  count++;
              }
          }
      }
  }
  
  return count > 0 ? total / count : -1;
}

console.log(getAverageGrade(bob, 'INFO 1603'));