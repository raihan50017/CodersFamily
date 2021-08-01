/* eslint-disable no-unused-vars */
import {
    Box,
    Grid,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import Paper from '@material-ui/core/Paper';
  import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

  const styles = makeStyles((theme) => ({
    counterContainer: {
      paddingLeft: "109px",
      paddingRight: "49px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
    },
    learnButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    
  
  }));
  
  const Homewhoweare= () => {
    const {counterContainer,learnButton} =
      styles();
    return (
      <React.Fragment>
        <Box className={counterContainer}>
          <Grid container >
          <Grid xs={12} md={12}>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginBottom: "0px"}} variant="h6">
               <span style={{color: "orangered"}}>Who We Are</span>
              </Typography>
              <Typography style={{color: "black", fontSize: "46px", textAlign: "center", marginBottom: "0px"}} variant="h6">
               Web Design Company
              </Typography>
              <Typography style={{color: "black", fontSize: "46px", textAlign: "center", marginBottom: "0px"}} variant="h6">
               you can trust
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              We won an award in 2013 and nominees every year as a web design agency of the
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              year. High quality. Following deadlines. Experienced team
              </Typography>
              <div className={learnButton}>
      
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        
        <Button>Learn More</Button>
      </ButtonGroup>
      
    </div>
            </Grid>
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>32 +</h1>
              <span>Profesional teams</span> 
              </Typography>
            </Grid>
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>200 +</h1>
              <span>Satisfied Customer</span> 
              </Typography>
            </Grid>
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>175 +</h1>
              <span>Successful Projects</span> 
              </Typography>
            </Grid>
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>8 +</h1>
              <span>Year of experience</span> 
              </Typography>
            </Grid>
          </Grid>
       </Box>
      </React.Fragment>
    );
  };
  
  // eslint-disable-next-line no-undef
  export default Homewhoweare;
  