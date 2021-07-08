import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "../css/AddCampusView.css";
const useStyles = makeStyles(theme => ({
  root: {
    margin: "15px"
  }
}));

const AddCampusView = (props) => {
  const classes = useStyles();
  return (
    <div id="add-campus">
        <h1>Add Campus</h1>
        <form id="add-campus-form" onSubmit={props.handleSubmit}>
          <TextField 
              className={classes.root} 
              variant="outlined" label="Name" name="name" 
              fullWidth required/>
          <TextField 
              className={classes.root} 
              variant="outlined" label="Address" name="address" 
              fullWidth required/>
          <TextField 
              className={classes.root} 
              variant="outlined" label="Image URL" name="imageURL"
              fullWidth />
          <TextField
              className={classes.root}
              variant="outlined" label="Description" name="description"
              fullWidth/>
          <Button 
              className={classes.root} type="submit"
              variant="contained" color="primary">Submit</Button>
        </form>
    </div>
  );
};

// AddStudentsView.propTypes = {
//   allStudents: PropTypes.array.isRequired,
// };

export default AddCampusView;
