import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "../css/AllStudentsView.css";
import { makeStyles } from '@material-ui/core/styles';

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div id="no-students"><h1>There are no students.</h1></div>;
  }

  return (
    <div id="all-students">
      <Link to="/student/add">
        <Button variant="contained" color="primary">
              Add Student
         </Button>
      </Link>
      {props.allStudents.map((student) => (
        <div className="student-list" key={student.id}>
          <img className="img-list" src={student.imageURL} />
          <div className="student-text">
            <Link to={`/student/${student.id}`}>
              <h1 className="student-name">{`${student.firstname} ${student.lastname}`}</h1>
            </Link>
            {
              student.campusId
              ? <p>{student.campus.name}</p>
              : <p>Not Enrolled</p>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
