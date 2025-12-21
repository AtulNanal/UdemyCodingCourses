import { useDebugValue } from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

import Header from "./Layout/Header";
import { Footer } from "./Layout/Footer";
import { Students } from "./Students";
import StudentReview from "./StudentReview";

const root = createRoot(document.getElementById("root"));

const courseName = "React JS";

const lectureCount = 1;
const isActive = true;

// Style object can be created and added to style sections instead of explicitly writing individual elements in the style secitons
const pageStyle = {
  textAlign: "center",
  backgroundColor: "lightgray",
  padding: "10px",
  color: "cyan",
};

//When specifiying a style class (say from bootstrap or others, we cannot use keyword class as its also JS keyword and will flag error !!!)
function HomePage() {
  return (
    <div>
      <Header />
      <p className="customHeading">We are superexcited to learn React</p>
      <h3 style={pageStyle}>Topics to learn in {courseName} Course</h3>
      <p>Lecture Count - {lectureCount}</p>
      <p>{isActive ? "Active" : "Not Active"}</p>
      <ul>
        <li>JSX</li>
        <li>Components</li>
        <li>Routing</li>
        <li>State Management</li>
      </ul>
      <div>
        Enter Task : <input type="text" maxLength={6} disabled={isActive} />
      </div>
      <hr />
      <h5 className="pt-2">Students Enrolled</h5>
      <Students experience={2} fullname="ABC PQR" grade="89%">
        {/* Child Component StudentReview inside Component Students*/}
        {/* Check how this is imported inside the Students Component jsx file*/}
        <StudentReview />
      </Students>
      <Students experience={5} fullname="XYZ LMN" grade="81%">
        <StudentReview />
      </Students>
      <Students experience={3} fullname="DEF HIJ" grade="68%">
        <StudentReview />
      </Students>

      <Footer></Footer>
    </div>
  );
}

//Use HomePage as a Component
//Footer component is now used here directly
root.render(
  //Invoke the function as a component by using its tag
  // As a Regular Tag OR As a Self closing Tag
  //Since its a Tag it can be reused other places
  <div>
    <HomePage />
  </div>
);
