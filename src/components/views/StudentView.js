const StudentView = (props) => {
    const {student} = props;
    return (
      <div>      
        <h1>{student.firstname + " " + student.lastname}</h1>
        <p>{
            student.campusId
            ? `${student.campus.name}`
            : "Not attending any school"
        }</p>

      </div>
    );
  };
  
  export default StudentView;
