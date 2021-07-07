import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { EditStudentContainer } from '../containers';

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
        <div className="edit-form">
          {
            props.showEdit
            ? <EditStudentContainer refresh={props.refresh} showEdit={props.showEditClick} student={student}/>
            : <></>
          }
        </div>
        <Button onClick={props.showEditClick} variant="contained" color="primary">
          Edit Student
        </Button>
        <Button onClick={props.handleClick} variant="contained" color="primary">
          Delete Student
        </Button>
      </div>
    );
  };
  
export default StudentView;
