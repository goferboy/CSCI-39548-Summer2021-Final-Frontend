import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";
import { AddStudentView } from "../views";
import { Redirect } from "react-router-dom";

class AddStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
  componentDidMount() {
    //Fetches all students if not previously fetched
    //This in cases where a user goes directly to path
    //'/student/add' and not through cliking the 'add
    //student' button from All Student view.
    if (this.props.allStudents.length === 0)
      this.props.fetchAllStudents();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let newStudent = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value
    };
    await this.props.addStudent(newStudent);
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) { 
        let newID = parseInt(this.props.allStudents.length);
        return (<Redirect to={"/student/" + newID} />);
    }
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
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  };
};

//Type check props;
AddStudentContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  addStudent: PropTypes.func.isRequired,
  fetchAllStudents: PropTypes.func.isRequired
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddStudentContainer);
