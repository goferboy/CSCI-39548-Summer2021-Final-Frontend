import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { EditCampusContainer } from '../containers';
import '../css/CampusView.css';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "15px"
  }
}));

const CampusView = (props) => {
  const classes = useStyles();
  const {campus} = props;
  return (
    <div id="campus-view">
      {
        campus.imageURL === "https://cdn.onlinewebfonts.com/svg/img_379742.png"
        ? <img id="no-campus-img" src={campus.imageURL} />
        : <img className="campus-img" src={campus.imageURL} />
      }
      <div className="campus-view-text">
        <h1>{campus.name}</h1>
        <h2>{campus.address}</h2>
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
        <Button className={classes.root} onClick={props.showEditClick} variant="contained" 
          color={props.showEdit ? "secondary" : "primary"}>
          Edit Campus
        </Button>
        <Button className={classes.root} onClick={props.handleClick} variant="contained" color="primary">
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
