import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category=== "All") {
        //method-1 : using forEach
    let allCourses = [];
    // returns you a list of all courses received from api response

    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;

    // method -2 : using spread operator

    // let allCourses = [...Object.values(courses)];
    }
    else {
        // mai sirf specific category ka data array karunga
        return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course) => (
            <Card key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses= {setLikedCourses} />
        ))
      }
    </div>
  )
}

export default Cards