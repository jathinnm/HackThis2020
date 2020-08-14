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
import { Link } from 'react-router-dom'


const drawerWidth = 220;
const appWidth= `calc(100% - ${drawerWidth}px)`

//Css
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
	backgroundColor: '#2D5D7B',
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
  //State
  const [quote, setQuotes] = useState('')
  
	//Check if user is logged in
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
		
        
          <Avatar className={classes.avatar}
          component={Link}
          to="/edit"
          ></Avatar> 
     
        
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
  
  //logs out the user
  async function logout() {
	await firebase.logout()
	props.history.push('/')
}

}