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
  

  const styles = makeStyles((theme) => ({
    certificateContainer: {
      paddingLeft: "79px",
      paddingRight: "79px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
    },
    certificate: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(36),
          height: theme.spacing(26),
        },
  }}));
  
  const Certificate= () => {
    const {certificateContainer,certificate} =
      styles();
    return (
      <React.Fragment>
        <Box className={certificateContainer}>
          <Grid container>
            <Grid xs={12} md={12}>
              <Typography style={{color: "black", fontSize: "46px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              Our <span style={{color: "orangered"}}>Certificates & Awards</span>
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              We won an award in 2013 and nominees every year as a web design agency of the
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              year. High quality. Following deadlines. Experienced team
              </Typography>
            </Grid>
            <Grid xs={12} md={12}>
            <div className={certificate}>
      <Paper variant="outlined" >
      <img src="../../certificate/aw1.PNG" alt="" srcset="" />
      </Paper>
      <Paper variant="outlined" square >
      <img src="../../certificate/aw2.PNG" alt="" srcset="" />
      </Paper>
      <Paper variant="outlined" >
      <img src="../../certificate/aw3.PNG" alt="" srcset="" />
      </Paper>
      <Paper variant="outlined" square >
      <img src="../../certificate/aw4.PNG" alt="" srcset="" />
      </Paper>
    </div>
    </Grid>
          </Grid>
       </Box>
      </React.Fragment>
    );
  };
  
  // eslint-disable-next-line no-undef
  export default Certificate;
  