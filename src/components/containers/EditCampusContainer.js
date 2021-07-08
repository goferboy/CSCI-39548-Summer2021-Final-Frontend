import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedCampus: this.props.campus
        }
    }
    
    handleChange = (event) => {
        const formCampus = {...this.state.updatedCampus};
        const inputField = event.target.name;
        const inputValue = event.target.value;
        formCampus[inputField] = inputValue;
        this.setState({updatedCampus: formCampus});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.props.editCampus(this.state.updatedCampus);
        //Trigger showEdit value back to false.
        this.props.showEdit();
        //Forces student container to refresh
        await this.props.refresh();
    }

    render() {
      return (
        <EditCampusView 
          campus={this.state.updatedCampus} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}/>
      );
    }
  }
  
  // Map state to props;
  const mapState = (state) => {
    return {
      allCampuses: state.allCampuses,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
    };
  };
  
  // Type check props;
    EditCampusContainer.propTypes = {
        editCampus: PropTypes.func.isRequired
  };
  
  // Export our store-connected container by default;
  export default connect(mapState, mapDispatch)(EditCampusContainer);
