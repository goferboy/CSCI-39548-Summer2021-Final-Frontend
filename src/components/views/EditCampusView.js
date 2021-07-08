import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const EditCampusView = (props) => {
    return (
        <div>
            <form id="edit-campus-form" onSubmit={props.handleSubmit}>
            <div className="form-entry">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={props.handleChange} value={props.campus.name} />
            </div>
            <div className="form-entry">
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={props.handleChange} value={props.campus.description} />
            </div>
            <Button id="edit-submit" variant="contained" color="primary">Submit</Button>
            </form>
      </div>
    );
  };
  
export default EditCampusView;
