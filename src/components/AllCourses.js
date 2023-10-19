import {useEffect, useState} from 'react'
import {Course} from './Course'
import axios from 'axios'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'
import { AddCourse } from './AddCourse'

export const AllCourses=()=>{

  useEffect(()=>{
   document.title=`All Courses`
  },[])
  //function to call server
  const [courses, setCourses] = useState([]);

  // Function to fetch all courses from the server
  const getAllCoursesFromServer = () => {
    axios
      .get(`${base_url}/courses`)
      .then((response) => {
        console.log(response.data);
        toast.success("Courses have been loaded", {
          position: "bottom-center",
        });
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      });
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  // Function to update courses state after adding a new course
  const updateCourses = (newCourse) => {
    setCourses([...courses, newCourse]);
  };
      return (
        <div>
          <h1>All Courses</h1>
          <p>List of Courses are as follows</p>
          {courses.length > 0 ? (
            courses.map((item) => <Course key={item.id} course={item} />)
          ) : (
            <p>No Courses</p>
          )}
          <AddCourse updateCourses={updateCourses} />
        </div>
      );
}