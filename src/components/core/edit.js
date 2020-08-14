import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Button, Paper, FormControl, InputLabel, Input } from '@material-ui/core'
import firebase from "../../config/firebase.js"
import React, {useState } from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "firebase/auth";



const useStyles = makeStyles((theme) => ({

    main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
    },
    
  avatar: {
	margin: theme.spacing.unit,
    backgroundColor: '#2D5D7B',
    width: theme.spacing(7),
    height: theme.spacing(7),
	},

  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
},
 button: {
     padding: '10px',
     margin: '5px',
     backgroundColor: theme.palette.secondary.main,
 },
 root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

}));

function Edit() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [interest, setInterest] = React.useState('');
  const [year, setYear] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };
  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  };


  return (
    <main className={classes.main}>
          <CssBaseline />
          <Paper className = {classes.paper}>
          <Typography variant="h2" >
            Edit Profile
          </Typography>
            <Avatar className = {classes.avatar}>
            </Avatar>
            <Typography variant="h6" >
		  Name:  
          <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" onChange={handleNameChange} />
    
          </form>
          </Typography>

         

          <Typography variant="h6" >
		  Phone Number:  
          <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic"  onChange={handleNumberChange} />
    
          </form>


          Major: 
      <RadioGroup aria-label="major" name="major" value={major} onChange={handleMajorChange}>
                        <FormControlLabel value="Business" control={<Radio />} label="Business" />
                        <FormControlLabel value="Social sciences and history" control={<Radio />} label="Social sciences and history" />
                        <FormControlLabel value="Health professions" control={<Radio />} label="Health professions" />
                        <FormControlLabel value="Psychology" control={<Radio />} label="Psychology" />
                        <FormControlLabel value="Pure sciences (biology, chemistry, physics, math)" control={<Radio />} label="Pure sciences (biology, chemistry, physics, math)" />
                        <FormControlLabel value="Engineering" control={<Radio />} label="Engineering" />
                        <FormControlLabel value="Visual/performing arts" control={<Radio />} label="Visual/performing arts" />
                        <FormControlLabel value="Communications/Journalism" control={<Radio />} label="Communications/Journalism" />
                        <FormControlLabel value="Education" control={<Radio />} label="Education" />
                        <FormControlLabel value="Computer Science" control={<Radio />} label="Computer Science" />
                    </RadioGroup> 


                    Year: 
          <RadioGroup aria-label="grades" name="grades" value={year} onChange={handleYearChange}>
                        <FormControlLabel value="Freshman" control={<Radio />} label="Freshman" />
                        <FormControlLabel value="Sophomore" control={<Radio />} label="Sophomore" />
                        <FormControlLabel value="Junior" control={<Radio />} label="Junior" />
                        <FormControlLabel value="Senior" control={<Radio />} label="Senior" />
                    </RadioGroup>


                    Interest:
                    <RadioGroup aria-label="interest" name="interest" value={interest} onChange={handleInterestChange}>
                        <FormControlLabel value="Video games" control={<Radio />} label="Video games" />
                        <FormControlLabel value="Sports" control={<Radio />} label="Sports" />
                        <FormControlLabel value="Coding" control={<Radio />} label="Coding" />
                        <FormControlLabel value="Beauty" control={<Radio />} label="Beauty" />
                        <FormControlLabel value="Visual arts" control={<Radio />} label="Visual arts" />
                        <FormControlLabel value="Music" control={<Radio />} label="Music" />
                    </RadioGroup>
          </Typography>


    
          <Button className = {classes.button}
            type = "submit"
            onClick={onFormSubmit}
            >
           Submit Changes
          </Button>
          <Button className = {classes.button}
            type = "submit"
            component={Link}
            to="/dashboard"
            >
          Return to Dashboard
          </Button>

          </Paper>
    </main>
      );

      async function onFormSubmit(e) {
	
        e.preventDefault()
        const db = firebase.db;
        db.settings({
          timestampsInSnapshots: true
        });
        var ref = db.collection('users').doc(firebase.getCurrentUsername());
        var user = firebase.auth.currentUser;

        var setUpdate =  ref.set({
          fullname: name,
          interest: interest, 
          major: major, 
          phoneNumber: number,
          year: year,
          
      }, { merge: true });
      user.updateProfile({
      displayName: name,            
      })

    alert('Your Changes Have Been Submitted ')        
    }
}
export default Edit