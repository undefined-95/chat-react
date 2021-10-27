import React from "react";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  media: {
    height: 260,
    width: 260,
    borderRadius: "50%",
  },
  button: {
    margin: theme.spacing(1),
  },
  person: {
    color: "black",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
  },
  content: {
    padding: 40,
  },
  text: {
    display: "flex",
    alignItems: "center",
  },
}));
function Shape() {
  const classes = useStyles();
  const data = useSelector((state) => state.users.items);
  const authId = useSelector((state) => state.users.authId);

  return data.map((item) => {
    if (item.id === authId) {
      return (
        <Container>
          <Box>
            <Grid container xs={13} className={classes.root}>
              <Grid item xs={3}>
                <CardMedia
                  className={classes.media}
                  image="https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif"
                  title="Contemplative Reptile"
                />
              </Grid>
              <Grid />
              <Grid item xs={3} className={classes.content}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.person}
                >
                  <Box className={classes.text}>
                    <p>Имя:⠀</p> <b>{item.name}</b>
                  </Box>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.person}
                >
                  <Box className={classes.text}>
                    <p>Фамилия:⠀</p> <b>{item.lastName}</b>
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      );
    }
  });
}

export default Shape;
