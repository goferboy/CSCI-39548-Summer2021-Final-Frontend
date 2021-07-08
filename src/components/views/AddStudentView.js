import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const AddStudentsView = (props) => {
  return (
    <div>
        <h1>add student</h1>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="firstname">First Name: </label>
            <input type="text" name="firstname" placeholder="First Name" required />
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" name="lastname" placeholder="Last Name" required />
            <RadioGroup name="campusId" value={props.campusValue} onChange={props.handleChange}>
                {
                    props.allCampuses.map((campus) => {
                        return(<FormControlLabel 
                          key={campus.id} 
                          checked={parseInt(props.campusValue) === campus.id} 
                          value={campus.id} 
                          control={<Radio />} 
                          label={campus.name} />)
                    })
                }
                <FormControlLabel checked={props.campusValue === null} value="" control={<Radio />} label="None" />
            </RadioGroup>
            <Button type="submit" className="edit-submit" variant="contained" color="primary">Submit</Button>
        </form>
    </div>
  );
};

// AddStudentsView.propTypes = {
//   allStudents: PropTypes.array.isRequired,
// };

export default AddStudentsView;
