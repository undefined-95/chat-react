import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  background: {
    background: "#f50057",
    justifyContent: "center",
  },
}));

function HeaderMessage() {
  const classes = useStyles();
  const { id } = useParams();
  const data = useSelector((state) =>
    state.users.items.find((item) => item.id === Number(id))
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="regular" className={classes.background}>
          <ListItemAvatar>
            <Avatar src={`/static/images/avatar.jpg`} />
          </ListItemAvatar>
          <Typography variant="h5">{data.name}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderMessage;
