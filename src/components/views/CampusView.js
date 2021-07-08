import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { EditCampusContainer } from '../containers';
import '../css/CampusView.css';

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div className="campus-view">
      {
        campus.imageURL === "https://cdn.onlinewebfonts.com/svg/img_379742.png"
        ? <img id="no-campus-img" src={campus.imageURL} />
        : <img className="campus-img" src={campus.imageURL} />
      }
      <div className="campus-text">
        <h1>{campus.name}</h1>
        <h3>{campus.address}</h3>
        <p>{campus.description}</p>
      </div>
      <p>Enrolled Students:</p>
      <ul>
      {
        campus.students.length
        ? 
          campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>
              <Link to={"/student/" + student.id}>
                {name}
              </Link>
            </li>
          );})
        :
          <li>No Students Enrolled</li>
      }
      </ul>
      <div className="button-menu">
        <Button onClick={props.showEditClick} variant="contained" 
          color={props.showEdit ? "secondary" : "primary"}>
          Edit Campus
        </Button>
        <Button onClick={props.handleClick} variant="contained" color="primary">
          Delete Campus
        </Button>
      </div>
      {
        props.showEdit
        ? <EditCampusContainer refresh={props.refresh} showEdit={props.showEditClick} campus={campus}/>
        : <></>
      }
    </div>
  );
};

export default CampusView;
