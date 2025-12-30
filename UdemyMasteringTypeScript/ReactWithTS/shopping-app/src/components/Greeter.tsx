import React, { type JSX } from "react";

interface GreeterProps {
  person: string;
}

function Greeter(props: GreeterProps): JSX.Element {
  // Get the return type by not setting it and then seeing the return type on hover
  return <h1>Hello {props.person} !!</h1>;
}

//React funciton written using React function Components (Obsolete !!!)
const Greeter_obsolete: React.FC = () => {
  return <h1>Hello !!</h1>;
};

export default Greeter;
