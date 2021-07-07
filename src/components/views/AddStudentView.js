import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AddStudentsView = (props) => {
  return (
    <div>
        <h1>add student</h1>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="firstname">First Name: </label>
            <input type="text" name="firstname" placeholder="First Name" required />
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" name="lastname" placeholder="Last Name" required />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

AddStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AddStudentsView;
