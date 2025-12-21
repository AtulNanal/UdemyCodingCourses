//Using a arrow function to create a component
//Here export the component as named component
const Grades = (props) => {
  return (
    <div className="col-8">
      <h6>Grades : {props.grade} </h6>
    </div>
  );
};

export { Grades };
