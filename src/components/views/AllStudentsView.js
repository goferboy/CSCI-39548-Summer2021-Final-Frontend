import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "../css/AllStudentsView.css";
import { makeStyles } from '@material-ui/core/styles';

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
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
          <Link to={`/student/${student.id}`}>
            <h1>{`${student.firstname} ${student.lastname}`}</h1>
            {
              student.campusId
              ? <p>{student.campus.name}</p>
              : <></>
            }
          </Link>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
