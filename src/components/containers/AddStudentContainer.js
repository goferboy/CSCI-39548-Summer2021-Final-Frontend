import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk, fetchAllStudentsThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { AddStudentView } from "../views";
import { Redirect } from "react-router-dom";

class AddStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            campusValue: null
        }
    }
  componentDidMount() {
    //Fetches all students if not previously fetched
    //This in cases where a user goes directly to path
    //'/student/add' and not through cliking the 'add
    //student' button from All Student view.
    if (this.props.allStudents.length === 0)
      this.props.fetchAllStudents();
    if (this.props.allCampuses.length === 0)
      this.props.fetchAllCampuses();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let newStudent = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        campusId: this.state.campusValue
    };
    await this.props.addStudent(newStudent);
    this.setState({
      redirect: true
    });
  }

  handleChange = (event) => {
    if (event.target.value === "") {
      this.setState({
        campusValue: null
      })
    }
    else {
      this.setState({
        campusValue: event.target.value
      })
    }
  }

  render() {
    if (this.state.redirect) { 
        let newID = parseInt(this.props.allStudents.length - 1);
        return (<Redirect to={"/student/" + this.props.allStudents[newID].id} />);
    }
    return (
      <AddStudentView allCampuses={this.props.allCampuses} campusValue={this.state.campusValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    );
  }
}

//Map state to props;
const mapState = (state) => {
  console.log(state);
  return {
    allStudents: state.allStudents,
    allCampuses: state.allCampuses
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    addStudent: (newStudent) => dispatch(addStudentThunk(newStudent)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
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
