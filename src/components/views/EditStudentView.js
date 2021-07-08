import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const EditStudentView = (props) => {
    return (
        <div>
            <form id="edit-student-form" onSubmit={props.handleSubmit}>
            <div className="form-entry">
                <label htmlFor="firstname">First Name: </label>
                <input type="text" name="firstname" onChange={props.handleChange} value={props.student.firstname} />
            </div>
            <div className="form-entry">
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" name="lastname" onChange={props.handleChange} value={props.student.lastname} />
            </div>
            <Button id="edit-submit" variant="contained" color="primary">Submit</Button>
            </form>
      </div>
    );
  };
  
export default EditStudentView;
