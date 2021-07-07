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
            <button id="login-submit">Submit</button>
            </form>
      </div>
    );
  };
  
export default EditStudentView;
