import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import "../css/EditStudentView.css"

//Used to add margins to Material-UI Elements
const useStyles = makeStyles(theme => ({
    root: {
      margin: "15px"
    }
}));

const EditStudentView = (props) => {
    const classes = useStyles();
    return (
        <div className="edit-student">
            <form id="edit-student-form" onSubmit={props.handleSubmit}>
                <TextField 
                    className={classes.root} 
                    variant="outlined" label="First Name" name="firstname" 
                    onChange={props.handleChange} value={props.student.firstname} 
                    fullWidth required/>
                <TextField 
                    className={classes.root} 
                    variant="outlined" label="Last Name" name="lastname" 
                    onChange={props.handleChange} value={props.student.lastname}
                    fullWidth required/>
                <TextField 
                    className={classes.root} 
                    variant="outlined" label="Email" name="email"
                    onChange={props.handleChange} value={props.student.email} 
                    fullWidth required/>
                <TextField 
                    className={classes.root} 
                    variant="outlined" label="Image URL" name="imageURL"
                    onChange={props.handleChange} value={props.student.imageURL}
                    fullWidth />
                <TextField
                    className={classes.root} 
                    type="number" InputProps={{inputProps: {min: 0, max: 4.0, step: 0.01}}}
                    variant="outlined" label="GPA" name="gpa"
                    onChange={props.handleChange} value={props.student.gpa}
                    fullWidth/>
                <FormLabel component="legend">Campus</FormLabel>
                <RadioGroup name="campusId" value={props.student.campusId === null ? "" : props.student.campusId} onChange={props.handleChange}>
                    {
                        props.allCampuses.map((campus) => {
                            return(
                                <FormControlLabel 
                                    checked={parseInt(props.student.campusId) === campus.id}
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
  
export default EditStudentView;
