import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import "../css/AddStudentView.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "15px"
  }
}));

const AddStudentsView = (props) => {
  const classes = useStyles();
  return (
    <div id="add-student">
      <h1>Add Student</h1>
      <form id="add-student-form" onSubmit={props.handleSubmit}>
        <TextField 
            className={classes.root} 
            variant="outlined" label="First Name" name="firstname" 
            fullWidth required/>
        <TextField 
            className={classes.root} 
            variant="outlined" label="Last Name" name="lastname" 
            fullWidth required/>
        <TextField 
            className={classes.root} 
            variant="outlined" label="Email" name="email" 
            fullWidth required/>
        <TextField 
            className={classes.root} 
            variant="outlined" label="Image URL" name="imageURL"
            fullWidth />
        <TextField
            className={classes.root} 
            type="number" InputProps={{inputProps: {min: 0, max: 4.0, step: 0.01}}}
            variant="outlined" label="GPA" name="gpa"
            fullWidth/>
        <FormLabel component="legend">Campus</FormLabel>
        <RadioGroup name="campusId" value={props.campusValue === null ? "" : props.campusValue} onChange={props.handleChange}>
          {
            props.allCampuses.map((campus) => {
              return(
                <FormControlLabel 
                    checked={parseInt(props.campusValue) === campus.id}
                    key={campus.id}
                    value={campus.id}
                    control={<Radio />}
                    label={campus.name} />)
            })
          }
          <FormControlLabel value="" control={<Radio />} label="None" />
        </RadioGroup>
        <Button 
          className={classes.root} type="submit"
          variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  );
};

export default AddStudentsView;
