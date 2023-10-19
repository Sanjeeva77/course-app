import axios from "axios";
import { Fragment, useEffect,useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

export const AddCourse = ({ updateCourses }) => {
  const [course, setCourse] = useState({});
  useEffect(()=>{
    document.title='Add Course'
  },[])

 
  //form handler function
  const handleForm=e=>{
    console.log(course)
    postDataToServer(course)
    e.preventDefault()
  }

  //creating function to post data to server
  const postDataToServer = (data) => {
    axios
      .post(`${base_url}/courses`, data)
      .then((response) => {
        toast.success("Course added successfully");
        setCourse({ id: "", title: "", description: "" });
        updateCourses(response.data); // Call the updateCourses function to update the course list in AllCourses component
      })
      .catch((error) => {
        toast.error("Error! Something went wrong");
      });
  };
  return (
    <Fragment>
      <h1 className="my-3">Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="courseId">Course Id</Label>
          <Input
            type="text"
            placeholder="Enter here"
            name="courseId"
            id="courseId"
            onChange={(e)=>setCourse({...course,id:e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input type="text" placeholder="Enter title here" id="title"
          onChange={(e)=>setCourse({...course,title:e.target.value})} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            id="description"
            placeholder="Enter description here"
            style={{height:150}}
            onChange={(e)=>setCourse({...course,description:e.target.value})}
          />
        </FormGroup>
        <Container>
            <Button type='submit' color="success">Add Course</Button>
            <Button type='reset' color="warning" style={{marginLeft:4}} 
            onClick={()=>setCourse({id:'',title:'',description:''})}>Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};
