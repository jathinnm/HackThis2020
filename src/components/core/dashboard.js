import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { Typography, Avatar, Button } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MessageIcon from '@material-ui/icons/Message';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from "../../config/firebase.js"
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import Questions from "../generic/questions.js"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 220;
const appWidth= `calc(100% - ${drawerWidth}px)`

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
  width: appWidth,
	marginLeft: drawerWidth,
	minHeight: '10vh',
	backgroundColor:'#2D5D7B'
  },
  avatar: {
	margin: theme.spacing.unit,
	backgroundColor: theme.palette.secondary.main,
	},
  drawer: {
    width: drawerWidth,
	flexShrink: 0,
	
  },
  submit: {
    position: 'absolute',
	bottom: 0,
	backgroundColor:'#2D5D7B'
  },
  drawerPaper: {
	width: drawerWidth,
	backgroundColor: theme.palette.secondary.main,

  },

  typography: {
    position: 'absolute',
    bottom: 0
  },
  toolbar: theme.mixins.toolbar,
  content:{
	  marginTop: '10vh',
	  alignItems: 'center',
	  justify:'center',
	  width:'100%',
	  height:"90vh",
	  padding: theme.spacing(3),
	  flexGrow: 1,
  },
  resetContainer: {
   width:'100'
  },
  drawerContent:{
	  color:'white',
	 marginTop: '10%'
  }, 
   drawerContent:{
	  color:'white',
	 marginTop: '10%'
  }, 

}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  const [quote, setQuotes] = useState('')
  

  if(!firebase.getCurrentUsername()) {
	// not logged in
	alert('Please login first')
	props.history.replace('/')
	return null
}

  return (
    <div className={classes.root}>
      <CssBaseline />
       <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap className={classes.typography}>
		  Hello { firebase.getCurrentUsername() }
          </Typography>
        </Toolbar>
      </AppBar> 
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
		{/* <Avatar className={classes.avatar}>
                    <VerifiedUserOutlined />
        </Avatar> */}
        <Divider />
        <List className = {classes.drawerContent}>
          {['Messages', 'Create Chat'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MessageIcon /> : <CreateIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className = {classes.drawerContent}>
          {['Deleted Chats', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <DeleteIcon /> : <SettingsIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={logout}
                    className={classes.submit}>
                    Logout
                </Button>
      </Drawer>
	  <div>
	  
	  </div>
      <Paper item className={classes.content}>
	  <div><Typography variant = 'h2'>Please Fill Out The Questionnaire</Typography></div>
	  <Questions/>
	
      </Paper>
</div>
    
  );
  async function logout() {
	await firebase.logout()
	props.history.push('/')
}

}

// import React, { useEffect, useState } from 'react'
// import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
// import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
// import withStyles from '@material-ui/core/styles/withStyles'
// import firebase from "../../config/firebase.js"
// import { withRouter } from 'react-router-dom'

// const styles = theme => ({
//     background: {
//         backgroundColor: "#2D5D7B",
//     },
// 	main: {
// 		width: 'auto',
// 		display: 'block', // Fix IE 11 issue.
// 		marginLeft: theme.spacing.unit * 3,
// 		marginRight: theme.spacing.unit * 3,
// 		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
// 			width: 400,
// 			marginLeft: 'auto',
// 			marginRight: 'auto',
//         },
        
// 	},
// 	paper: {
// 		marginTop: theme.spacing.unit * 8,
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
// 	},
// 	avatar: {
// 		margin: theme.spacing.unit,
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	submit: {
// 		marginTop: theme.spacing.unit * 3,
// 	},
// })

// function Dashboard(props) {
// 	const { classes } = props
//     const [quote, setQuotes] = useState('')


// 	if(!firebase.getCurrentUsername()) {
// 		// not logged in
// 		alert('Please login first')
// 		props.history.replace('/')
// 		return null
// 	}

	
// 	return (
//         <div className = {classes.background}>
//             <main className={classes.main}>
//                 <Paper className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <VerifiedUserOutlined />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Hello { firebase.getCurrentUsername() }
//                     </Typography>
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="secondary"
//                         onClick={logout}
//                         className={classes.submit}>
//                         Logout
//                     </Button>
//                 </Paper>
//             </main>
//         </div>
// 	)

// 	async function logout() {
// 		await firebase.logout()
// 		props.history.push('/')
// 	}
// }

// export default withRouter(withStyles(styles)(Dashboard))