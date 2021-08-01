/* eslint-disable jsx-a11y/img-redundant-alt */
import {
    Box,
    Grid,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import List from '@material-ui/core/List';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemText from '@material-ui/core/ListItemText';
  import ListItemAvatar from '@material-ui/core/ListItemAvatar';
  import Avatar from '@material-ui/core/Avatar';
  import ImageIcon from '@material-ui/icons/Image';
  import WorkIcon from '@material-ui/icons/Work';
  import BeachAccessIcon from '@material-ui/icons/BeachAccess';
  import Divider from '@material-ui/core/Divider';

  const styles = makeStyles((theme) => ({
    AboutContainer: {
      paddingLeft: "79px",
      paddingRight: "79px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
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
  
  const Hometestimonial = () => {
    const {AboutContainer,makeDifferent,Aveter,Menu} =
      styles();
    return (
      <React.Fragment>
        <Box className={AboutContainer}>
          <Grid container>
            <Grid xs={12} md={6} style={{ padding: "15px",color: "white",backgroundColor: "black"}}>
              <Typography style={{ fontSize: "26px", textAlign: "left", marginBottom: "0px"}} variant="h6">
              Testimonials
              </Typography>
              <Typography style={{ fontSize: "14px", textAlign: "left", marginTop: "0px"}} variant="h6">
              What are customers saying
              </Typography>
              <div className={Aveter}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">H</Avatar>
            
             </div>
              <Typography style={{ fontSize: "26px", textAlign: "left", marginTop: "0px"}} variant="h6">
             Mr. Jone Doe
              </Typography>
              <Typography style={{ fontSize: "16px", textAlign: "left", marginTop: "0px"}} variant="h6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et placeat velit voluptatum, repellat dolores commodi inventore ullam labore
              unde, quidem dignissimos quas porro sunt quis. Debitis voluptatibus natus perferendis.
              </Typography>
            </Grid>
            
            <Grid xs={12} md={6} style={{padding:"15px"}}>
              <Typography style={{color: "black", fontSize: "23px", textAlign: "left", marginBottom: "0px"}} variant="h6">
              What Makes Us <span style={{color: "orangered"}}>Different</span>
              </Typography>
              <List className={makeDifferent}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Big Experience" secondary=" Our web design company specializes in the professional creation of unique sites." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Strong Team" secondary=" An excellent team of professionals will help you to bring all your ideas to life in the best possible way and with flexible functionality." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Personal Solution" secondary="Individual approach to your project. flexible solutions for your tasks to achieve your goals on the path to success." />
      </ListItem>
    </List>
            </Grid>
        
          </Grid>
        </Box>
      </React.Fragment>
    );
  };
  
  export default Hometestimonial;
  