/* eslint-disable jsx-a11y/img-redundant-alt */
import {
    Box,
    Grid,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import ButtonGroup from '@material-ui/core/ButtonGroup';
  import Button from '@material-ui/core/Button';
  import Paper from '@material-ui/core/Paper';


  const styles = makeStyles((theme) => ({
    AboutContainer: {
      paddingLeft: "79px",
      paddingRight: "79px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
    },
    clientpaper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },
    makeDifferent: {
        width: '100%',
        maxWidth: 460,
        backgroundColor: theme.palette.background.paper,
      },
      Avetar: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    Menu: {
      fontSize: "26px",
      marginTop: "12px",
      fontWeight: "500",
      "& a": {
        paddingBottom: "8px",
        display: "block",
        color: "#627792",
      },
    },
  }));
  
  const Homeclient = () => {
    const {AboutContainer,clientpaper} =
      styles();
    return (
      <React.Fragment>
        <Box className={AboutContainer}>
          <Grid container>
            <Grid xs={12} md={6} style={{ padding: "15px"}}>
              <Typography style={{color:"black", fontSize: "36px", textAlign: "left", marginBottom: "0px"}} variant="h6">
              Our <span style={{color: "orangered"}}>Clients</span>
              </Typography>
              <Typography style={{color: "black", fontSize: "17px", textAlign: "left", marginTop: "0px"}} variant="h6">
              We worked with some awesome peoples
              </Typography>
              <ButtonGroup disableElevation variant="contained" style={{ color:"white", border:"3px solid red",borderRadius:"6px"}}>
      <Button> Learn More</Button>
    </ButtonGroup>
            </Grid>
            <Grid xs={12} md={6} style={{ padding: "15px"}}>
            <div className={clientpaper}>
      <Paper elevation={3} />
      <Paper elevation={1}/>
      <Paper elevation={3} />
    </div>
    <div className={clientpaper}>
      <Paper elevation={3} />
      <Paper elevation={1}/>
      <Paper elevation={3} />
    </div>
            </Grid>
        
          </Grid>
        </Box>
      </React.Fragment>
    );
  };
  
  export default Homeclient;
  