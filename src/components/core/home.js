import React from 'react'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { Link } from 'react-router-dom'
import image from '../util/homeSplash.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Register from "./register.js"
import Login from "./signIn.js"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
      },
      navigation:{
        backgroundColor: "#2D5D7B"
      },
      image: {
       
        backgroundRepeat: 'no-repeat',
        backgroundColor: 
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100vh'
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      },
      title:{
          marginTop: "5vh",
        marginBottom: '5vh',
        color:'white',
        fontFamily: [
            '-apple-system',
            //'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
          ]
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        padding:'5%',
       
      },
      homeIcon:{
        width: '5vh',
        height: '10vh',
      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        marginTop: '5vh',
        alignItems: 'center'
        
        
      },
	
}));

    export default function HomePage() {
    const classes = useStyles();
    const [registerOpen, setRegisterOpen] = React.useState(false);
    const [loginOpen, setLoginOpen] = React.useState(false);

    const handleRegisterOpen = () => {
        setRegisterOpen(true);
    };

    const handleRegisterClose = () => {
        setRegisterOpen(false);
    };
    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

	return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}  > 
        <img src= {image} alt="Home image"className={classes.image} ></img>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className ={classes.navigation}>
        <div className={classes.paper}>
           <Avatar className={classes.avatar}>
            <HomeSharpIcon className={classes.homeIcon} />
          </Avatar> 
          <Typography  variant="h1" className={classes.title} align ="center">
            Welcome Guest!
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleRegisterOpen}
            className={classes.submit}>
            Register
         </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleLoginOpen}
                className={classes.submit}>
                Login
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/dashboard"
                className={classes.submit}>
                Dashboard
            </Button>
          
            
      
        </div>
      </Grid>
      <Register
        registerOpen = {registerOpen}
        handleRegisterClose={handleRegisterClose}
      />
      <Login
        loginOpen = {loginOpen}
        handleLoginClose={handleLoginClose}
      />
    </Grid>
            
   
	);
}

