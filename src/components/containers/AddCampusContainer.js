import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCampusThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { AddCampusView } from "../views";
import { Redirect } from "react-router-dom";

class AddCampusContainer extends Component {
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
    if (this.props.allCampuses.length === 0)
      this.props.fetchAllCampuses();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let imageURLValue, descriptionValue;
    if (event.target.imageURL.value === "")
      imageURLValue = null;
    else
      imageURLValue = event.target.imageURL.value;
    if (event.target.description.value === "")
      descriptionValue = null;
    else
      descriptionValue = event.target.description.value;    
    let newCampus = {
        name: event.target.name.value,
        address: event.target.address.value,
        description: descriptionValue
    };
    if (imageURLValue)
      newCampus.imageURL = imageURLValue;
    console.log(newCampus);
    await this.props.addCampus(newCampus);
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) { 
        let newID = parseInt(this.props.allCampuses.length - 1);
        return (<Redirect to={"/campus/" + this.props.allCampuses[newID].id} />);
    }
    return (
      <AddCampusView handleSubmit={this.handleSubmit}/>
    );
  }
}

//Map state to props;
const mapState = (state) => {
  console.log(state);
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    addCampus: (newCampus) => dispatch(addCampusThunk(newCampus)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  };
};

//Type check props;
AddCampusContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  addCampus: PropTypes.func.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusContainer);
