var express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


app.get('/api/getCourses', function (req, res) {
    res.send(courses);
 })

 app.get('/api/getPrograms', function (req, res) {
    res.send(programs);
 })

 app.get('/api/getTeachers', function (req, res) {
    res.send(teachers);
 })

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

let courses = `[
    {
      "courseImg": "assets/images/course_1.jpg",
      "numOfLessons": "4",
      "courseDuration": "12 Weeks",
      "courseFee": "$99",
      "title": "Logo Design Course",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "numRequests": "2",
      "numOfStudents": "2193"     
    },
    {
      "courseImg": "assets/images/course_2.jpg",
      "numOfLessons": "9",
      "courseDuration": "18 Weeks",
      "courseFee": "$79",
      "title": "JS Programming Language",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "numRequests": "2", 
      "numOfStudents": "4745"     
    },
    {
      "courseImg": "assets/images/course_1.jpg",
      "numOfLessons": "6",
      "courseDuration": "22 Weeks",
      "courseFee": "$39",
      "title": "Study Law of Physics",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "numRequests": "17",
      "numOfStudents": "4215"        
    }
  ]`;

  let programs = `[
    {
      "programImg": "assets/images/program.svg",
      "numOfYearlyGrads": "22931",
      "numOfUniversity": "150"    
    }
  ]`;

  let teachers = `[
    {
      "teacherImg": "assets/images/teacher_1.jpg",
      "name": "Benjamin Stone",
      "subject": "Physics",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "teacherImg": "assets/images/teacher_2.jpg",
      "name": "Kotleene Stone",
      "subject": "Physics",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "teacherImg": "assets/images/teacher_3.jpg",
      "name": "Sodie White",
      "subject": "Physics",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]`;