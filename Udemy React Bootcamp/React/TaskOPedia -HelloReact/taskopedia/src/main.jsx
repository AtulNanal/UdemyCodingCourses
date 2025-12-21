import { useDebugValue } from "react";
import { createRoot } from "react-dom/client";

// React code looks like a combination of Javascript code with HTML
// This code type is the .jsx file --> Java Script XML

// createRoot(document.getElementById('root')).render(
//  <h1>
//    Hello world
//  </h1>
// )

// OR

//Java Script Code for doing the same stuff as above to Render Hello World !!!

// const rootElement = document.getElementById('root');

// const h1Element = document.createElement("h1");

// h1Element.textContent = "Hello World !!!";

// rootElement.appendChild(h1Element);

function Header() {
  return (
    <div>
      <h1>Welcome to the React Course</h1>
    </div>
  );
}

//Footer component is now here a child component of HomePage component
function HomePage() {
  return (
    <div>
      <p>Hello World !!!</p>
      <p>We are superexcited to learn React</p>
      <Footer></Footer>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>Made with Love by DotNetMastery</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

//Use HomePage as a function
// root.render(
//   homePage()
// )

//Use HomePage as a Component
//Footer component is now used here directly
root.render(
  //Invoke the function as a component by using its tag
  // As a Regular Tag OR As a Self closing Tag
  //Since its a Tag it can be reused other places
  <div>
    <Header></Header>
    <HomePage />
    <HomePage />
    <HomePage></HomePage>
    <HomePage />
    <p>End of Page</p>
    <Footer />
  </div>
);
