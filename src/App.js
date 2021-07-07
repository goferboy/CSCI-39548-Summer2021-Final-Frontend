import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HeaderContainer,
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  AddStudentContainer,
  AddCampusContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/add" component={AddCampusContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/add" component={AddStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
      </Switch>        
    </div>
  );
}

export default App;
