const titleElement = document.querySelector("#title");
console.log("Title Element:", titleElement);

const firstCourse = document.querySelector(".course");
console.log("First Course:", firstCourse);

const allCourses = document.querySelectorAll(".course");
console.log("All Courses:", allCourses);

allCourses.forEach((course, index) => {
  console.log(`Course ${index + 1}:`, course.textContent);
});
