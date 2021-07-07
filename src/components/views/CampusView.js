import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { EditStudentContainer } from '../containers';

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <ul>
      {
        campus.students.length
        ? 
          campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>{name}</li>
          );})
        :
          <p>No Student Enrolled</p>
      }
      </ul>
      {/* {
        props.showEdit
        ? <EditCampusContainer refresh={props.refresh} showEdit={props.showEditClick} campus={campus}/>
        : <></>
      } */}
      <Button onClick={props.showEditClick} variant="contained" color="primary">
        Edit Campus
      </Button>
      <Button onClick={props.handleClick} variant="contained" color="primary">
        Delete Campus
      </Button>
    </div>
  );
};

export default CampusView;
