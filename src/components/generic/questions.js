import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import firebase from "../../config/firebase.js"
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',

  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    align: 'center'
  },

}));



//Questions
function getSteps() {
   
  return ['Why are you using (insert app name)?', 'Select your year in college', 'Select your major/career area', 'Select your primary interest'];
}



function Questions() {
  const classes = useStyles();
  //States
  const [activeStep, setActiveStep] = React.useState(0);
  const [year, setYear] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [interest, setInterest] = React.useState('');
  const [reason, setReason] = React.useState({
    meetPeople: false,
    network: false,
    similarInterests: false,
  });
  const [groupId, setGroupId] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const { meetPeople, network, similarInterests } = reason;

  const steps = getSteps();

//Grabs the phone number
 useEffect(() => {
    const db = firebase.db;
    db.settings({
        timestampsInSnapshots: true
      });
   
    var docRef = db.collection('users').doc(firebase.getCurrentUsername());
    console.log(docRef);
    
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        setPhoneNumber(doc.data().phoneNumber)
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
    
})
//Methods to set the for values
  const handleReasonChange = (event) => {
    setReason({ ...reason, [event.target.name]: event.target.checked });
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




//Methods to handle navigation of form
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className={classes.root}>
      <form>
        <Stepper activeStep={activeStep} orientation="vertical">

          <Step key='Why are you using (insert app name)?'>
            <StepLabel>Why are you using (insert app name)?</StepLabel>
            <StepContent>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={meetPeople} onChange={handleReasonChange} name="meetPeople" />}
                  label="To meet new people"
                />
                <FormControlLabel
                  control={<Checkbox checked={network} onChange={handleReasonChange} name="network" />}
                  label="To network with students in my major"
                />
                <FormControlLabel
                  control={<Checkbox checked={similarInterests} onChange={handleReasonChange} name="similarInterests" />}
                  label="To talk to students with similar interests "
                />
              </FormGroup>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          <Step key='Select your year in college'>
            <StepLabel>Select your year in college</StepLabel>
            <StepContent>

              <RadioGroup aria-label="grades" name="grades" value={year} onChange={handleYearChange}>
                <FormControlLabel value="Freshman" control={<Radio />} label="Freshman" />
                <FormControlLabel value="Sophomore" control={<Radio />} label="Sophomore" />
                <FormControlLabel value="Junior" control={<Radio />} label="Junior" />
                <FormControlLabel value="Senior" control={<Radio />} label="Senior" />
              </RadioGroup>

              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          <Step key='Select your major/career area'>
            <StepLabel>Select your major/career area</StepLabel>
            <StepContent>
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

              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          <Step key='Select your primary interest'>
            <StepLabel>Select your primary interest</StepLabel>
            <StepContent>

              <RadioGroup aria-label="interest" name="interest" value={interest} onChange={handleInterestChange}>
                <FormControlLabel value="Video games" control={<Radio />} label="Video games" />
                <FormControlLabel value="Sports" control={<Radio />} label="Sports" />
                <FormControlLabel value="Coding" control={<Radio />} label="Coding" />
                <FormControlLabel value="Beauty" control={<Radio />} label="Beauty" />
                <FormControlLabel value="Visual arts" control={<Radio />} label="Visual arts" />
                <FormControlLabel value="Music" control={<Radio />} label="Music" />
              </RadioGroup>

              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onFormSave}
                    onMouseUp = {handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>

                </div>
              </div>

            </StepContent>
          </Step>

        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All questions completed - you&apos;re finished!</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
          </Button>
          <Button
                    type='submit'
                    onClick={onFormSubmit}
                    variant="contained"
                    color="secondary"
                    className={classes.button}>
                    Submit
            </Button>
          </Paper>
        )}
      </form>
      <h1>{firebase.getCurrentNumber}</h1>
    </div>
  );
//Grabs the group Id from the database
  async function onFormSave(e) {
    
   
    const db = firebase.db;
    db.settings({
      timestampsInSnapshots: true
    });
    var ref = db.collection('users').doc(firebase.getCurrentUsername());
    var setWithMerge = ref.set({
      reason: reason,
      year: year,
      major: major,
      interest: interest,
    }, { merge: true });

    if (similarInterests) {
      const myInterest = interest.replace(/\s+/g, '-').toLowerCase();
      console.log(myInterest);
      var docRef = db.collection('groups').doc(myInterest);
      console.log(docRef);


      docRef.get().then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setGroupId(doc.data().groupId)
          
        } else {
          
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
    
   
    }
  }
  
  //Make the group in group me
  async function onFormSubmit(e) {
      e.preventDefault()
    console.log(groupId);
    if (groupId != '') {
        const nickname = firebase.getCurrentUsername();
        const url = 'https://api.groupme.com/v3/groups/' + groupId + '/members/add?token=2qAO3FVAg5rM2QPaWYEJeHhjnKNYjFxJCceR3CSy';
        console.log(phoneNumber)
        const response = await Axios.post(

          url,
          {
            "members": [
              {
                "nickname": nickname,
                "phone_number": phoneNumber
              }]
          }

        )

        console.log(response.data.response);
      }
        
      
      alert("You have been added to the group")
    }

}


export default Questions