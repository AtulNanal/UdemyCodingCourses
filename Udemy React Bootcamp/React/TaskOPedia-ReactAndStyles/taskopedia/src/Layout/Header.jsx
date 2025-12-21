import logo from "../images/react-3.png";

//Example of Default Export of a Function

function Header() {
  return (
    <div className="p-1 text-center">
      <img src={logo} style={{ width: "30px" }} />
      <span className="text-success"> Welcome to the React Course</span>
    </div>
  );
}

//Used when there is only one thing to export from the .jsx file
export default Header;
