// import logo from './logo.svg';
// import React from "react";
import "./App.css";
import { Header } from "./components/Header";
// import {Button} from 'reactstrap'
import { ToastContainer, toast } from "react-toastify";
import { Col, Container, Navbar, Row } from "reactstrap";
import { Menus } from "./components/Menus";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";

import { Course } from "./components/Course";
import { AllCourses } from "./components/AllCourses";
import { AddCourse } from "./components/AddCourse";
import { Contact } from "./components/Contact";

import About from "./components/About";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Courses } from "./components/Courses";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { NewCourses } from "./components/NewCourses";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
// const LazyAbout = React.lazy(() => import("./components/About"));
function App() {
  return (
    <div className="App">
      <>
        <ToastContainer />
        <Navbar />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
               <Routes>
                <Route path="/" element={<Home/>}  />
                <Route path="add-course" element={<AddCourse/>} />
                <Route path="view-courses" element={<AllCourses/> }  />
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                </Routes>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
