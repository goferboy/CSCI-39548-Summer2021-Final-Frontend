import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import "../css/EditCampusView.css";

const useStyles = makeStyles(theme => ({
    root: {
      margin: "15px"
    }
}));

const EditCampusView = (props) => {
    const classes = useStyles();
    return (
        <div className="edit-campus">
            <form id="edit-campus-form" onSubmit={props.handleSubmit}>
                <TextField 
                    className={classes.root} 
                    variant="outlined" label="Name" name="name" 
                    onChange={props.handleChange} value={props.campus.name} 
                    fullWidth required/>
                <TextField 
                    className={classes.root} 
                    variant="outlined" label="Address" name="address" 
                    onChange={props.handleChange} value={props.campus.address}
                    fullWidth required/>
                <TextField 
                    className={classes.root} 
                    variant="outlined" label="Image URL" name="imageURL"
                    onChange={props.handleChange} value={props.campus.imageURL}
                    fullWidth />
                <TextField
                    className={classes.root}
                    variant="outlined" label="Description" name="description"
                    onChange={props.handleChange} value={props.campus.description}
                    fullWidth/>
                <Button 
                    className={classes.root} type="submit"
                    variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    );
  };
  
export default EditCampusView;
