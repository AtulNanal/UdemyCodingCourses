import { Grades } from "./Grades";

//Passing Properties through parent can be achieved by using a properties argument as below
export function Students(props) {
  return (
    <div className="container p-4 bg-success my-3 rounded">
      <div className="row border p-2">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.fullname}`}
            style={{ maxWidth: "50px" }}
            alt="IMAGE"
          ></img>
        </div>
        <div className="col-8">
          {props.fullname}
          <br />
          Coding Experience {props.experience} years
          <br />
          <Grades grade={props.grade} />
        </div>
        {/*Acessing Child Components using Properties */}
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
}
