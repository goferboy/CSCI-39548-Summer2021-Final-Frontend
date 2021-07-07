import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
        <Button onClick={props.handleClick} variant="contained" color="primary">
          Delete Student
        </Button>
      </div>
    );
  };
  
export default StudentView;
