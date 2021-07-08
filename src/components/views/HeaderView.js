import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
      fontType: 'bold',
      fontFamily: 'Roboto, sans-serif', 
      fontSize: '35px', 
      color: 'white'
    },
    toolbar: {
      maxWidth: "900px"
    },
    appBar:{
      alignItems: "center",
      backgroundColor: '#11153e',
      shadows: ['none'],
    },
    greeting:{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: "50%",
      margin: "auto",
    },
    links:{
      textDecoration: 'none',
    }
}));

const HeaderView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title} color="inherit" style={{marginRight: '100px'}}>
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/'} >
          <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              About
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} style={{marginRight: '10px'}}>
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );    
}

export default HeaderView;
