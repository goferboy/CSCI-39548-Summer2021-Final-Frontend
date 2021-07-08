import "../css/HomePageView.css";

const HomePageView = () => {
  return (
    <div id="home-view">
      <img id="hunter-logo" src="hunter-logo.png" />
      <h1>CSCI-39548: Pratical Web Development</h1>
      <h3 id="session-date">Summer 2021 Sesssion</h3>
      <hr />
      <h1 id="final-project">Final Project</h1>
      <div id="details">
      <h3 id="goal">Goal</h3>
        <p>Using Node, Express, React, Redux, PostgreSQL, and Sequelize, build a RESTful full-stack web application to manage students and campuses. This will cover all of the CRUD operations: Create, Read, Update, and Delete. This will encompass writing models, querying a database with an ORM, designing routes/endpoints and handler functions to process user requests and generate responses, writing out React Components, managing the state of the application with React-Redux, and much more. This will also involve having two individual repositories/applications (a separate server and a separate client), which encourages separation of concerns and modularity.</p>
        <p>In summary, the webapp should do the following:</p>
        <ul>
          <li>Allow a user to view all campuses, stored on a backend server, in which the frontend fetches and propagates for the user.</li>
          <li>From there, a user can add a new campus, which is sent to the backend and added to the database</li>
          <li>User can click on an individual campus to view more details, including if any students from the students database are attending that campus</li>
          <li>From there, a user can choose to edit the campus information, or delete it form the database</li>
          <li>Like the campuses database, the students provides same functionailty of viewing all students, viewing more details of a student, editing, adding, and deleting</li>
        </ul>
        <p>More details about the assignment can be found <a id="assignment-link" href="https://docs.google.com/document/d/1ioCrS7uzKSkH8d-L04xMeHsq5GbkiAfwPNyLUoqrb04/edit">here</a></p>
      </div>
      <hr />
      <h1 id="team-members">Team Members</h1>
      <ul>
        <li>
          <div id="member-name">
            <h2 id="name">Henry Baum</h2>
              <div id="github-info">
                  <img id="github-image" src="github.png"/>
                  <a id="github-link" href="https://github.com/goferboy">goferboy</a>
              </div>
          </div>
        </li>
      </ul>
    </div>
  );    
}

export default HomePageView;
