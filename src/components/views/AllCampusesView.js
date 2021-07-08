import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "../css/AllCampusesView.css";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div id="all-campuses">
      <Link to="/campus/add">
        <Button variant="contained" color="primary">
              Add Campus
        </Button>
      </Link>
      {props.allCampuses.map((campus) => (
        <div className="campus-list"key={campus.id}>
          <img className="img-list" src={campus.imageURL} />
          <div className="campus-text">
            <Link to={`/campus/${campus.id}`}>
              <h1>{campus.name}</h1>
            </Link>
            <p>{campus.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
