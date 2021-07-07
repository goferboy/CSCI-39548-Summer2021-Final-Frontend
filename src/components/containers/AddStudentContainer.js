import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk } from "../../store/thunks";
import { AddStudentView } from "../views";

class AddStudentContainer extends Component {
  componentDidMount() {
  }

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target.firstname.value + " " + event.target.lastname.value)
    let newStudent = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value
    };
      this.props.addStudent(newStudent);
  }

  render() {
    return (
      <AddStudentView handleSubmit={this.handleSubmit}/>
    );
  }
}

//Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    addStudent: (newStudent) => dispatch(addStudentThunk(newStudent)),
  };
};

// Type check props;
AddStudentContainer.propTypes = {
//   allStudents: PropTypes.array.isRequired,
  addStudent: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddStudentContainer);
