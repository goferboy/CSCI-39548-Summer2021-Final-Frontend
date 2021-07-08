import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AllCampusesContainer } from '../containers';

const EditStudentView = (props) => {
    console.log(props.allCampuses);
    return (
        <div>
            <form id="edit-student-form" onSubmit={props.handleSubmit}>
            <div className="form-entry">
                <label htmlFor="firstname">First Name: </label>
                <input type="text" name="firstname" onChange={props.handleChange} value={props.student.firstname} required />
            </div>
            <div className="form-entry">
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" name="lastname" onChange={props.handleChange} value={props.student.lastname} required />
            </div>
            <RadioGroup aria-label="campus" name="campusId" value={props.student.campusId === null ? "" : props.student.campusId} onChange={props.handleChange}>
                {
                    props.allCampuses.map((campus) => {
                        return(<FormControlLabel 
                            checked={parseInt(props.student.campusId) === campus.id}
                            key={campus.id}
                            value={campus.id}
                            control={<Radio />}
                            label={campus.name} />)
                    })
                }
                <FormControlLabel value="" control={<Radio />} label="None" />
            </RadioGroup>
            <Button type="submit" id="edit-submit" variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    );
  };
  
export default EditStudentView;
