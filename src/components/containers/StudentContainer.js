import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudentThunk, fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { Redirect } from 'react-router-dom';

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      showEdit: false
    }
  }
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleClick = async () => {
    await this.props.deleteStudent(this.props.match.params.id);
    this.setState({
      redirect: true
    })
  }

  showEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  render() {
    if (this.state.redirect)
      return (<Redirect to="/students"/>);
    return (
      <StudentView 
        student={this.props.student}
        handleClick={this.handleClick}
        showEditClick={this.showEdit}
        showEdit={this.state.showEdit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
