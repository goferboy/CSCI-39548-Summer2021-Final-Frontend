import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const AddStudentsView = (props) => {
  return (
    <div>
        <h1>add student</h1>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="firstname">First Name: </label>
            <input type="text" name="firstname" placeholder="First Name" required />
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" name="lastname" placeholder="Last Name" required />
            <Button id="edit-submit" variant="contained" color="primary">Submit</Button>
        </form>
    </div>
  );
};

// AddStudentsView.propTypes = {
//   allStudents: PropTypes.array.isRequired,
// };

export default AddStudentsView;
