import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AddCampusView = (props) => {
  return (
    <div>
        <h1>add Campus</h1>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder="Name" required />
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" placeholder="Description" required />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

// AddStudentsView.propTypes = {
//   allStudents: PropTypes.array.isRequired,
// };

export default AddCampusView;
