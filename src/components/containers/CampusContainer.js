import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCampusThunk, fetchCampusThunk } from "../../store/thunks";
import { CampusView } from "../views";
import { Redirect } from 'react-router-dom';

class CampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      showEdit: false
    }
  }
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleClick = async () => {
    await this.props.deleteCampus(this.props.match.params.id);
    this.setState({
      redirect: true
    })
  }

  showEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  refresh = async () => {
    await this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    if (this.state.redirect)
      return (<Redirect to="/campuses"/>);
    return (
      <CampusView 
        campus={this.props.campus}
        handleClick={this.handleClick}
        showEditClick={this.showEdit}
        showEdit={this.state.showEdit}
        refresh={this.refresh}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
