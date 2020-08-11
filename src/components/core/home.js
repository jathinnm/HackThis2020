import React from 'react'
// import { Typography, Paper, Avatar, Button } from '@material-ui/core'
// import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
// import withStyles from '@material-ui/core/styles/withStyles'
// import { Link } from 'react-router-dom'
// import {Helmet} from 'react-helmet';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
      },
      navigation:{
        backgroundColor: "#2D5D7B"
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
	// main: {
	// 	width: 'auto',
	// 	display: 'block', 
	// 	marginLeft: theme.spacing.unit * 3,
	// 	marginRight: theme.spacing.unit * 3,
	// 	[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
	// 		width: 400,
	// 		marginLeft: 'auto',
	// 		marginRight: 'auto',
    //     },
        
	// },
	// paper: {
	// 	marginTop: theme.spacing.unit * 40,
	// 	display: 'flex',
	// 	flexDirection: 'column',
	// 	alignItems: 'center',
    //     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        
	// },
	// avatar: {
	// 	margin: theme.spacing.unit,
	// 	backgroundColor: theme.palette.secondary.main,
	// },
	// submit: {
	// 	marginTop: theme.spacing.unit * 3,
	// },
}));

    export default function HomePage() {
    const classes = useStyles();

	return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className ={classes.navigation}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Welcome Guest!
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            component={Link}
            to="/register"
            className={classes.submit}>
            Register
         </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/login"
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
    </Grid>
            
            // <main className={classes.main}>
            //     <Helmet>
            //         <style>{'body { background-color: #2D5D7B; }'}</style>
            //      </Helmet>
            //     <Paper className={classes.paper}>
            //         {/* <Avatar className={classes.avatar}>
            //             <VerifiedUserOutlined />
            //         </Avatar> */}
            //         <Typography component="h1" variant="h5">
            //             Hello Guest!
            //         </Typography>
                   
                   
                     
            //     </Paper>
            // </main>
   
	);
}

