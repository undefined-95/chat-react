import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CommentIcon from "@material-ui/icons/Comment";
import Avatar from "@material-ui/core/Avatar";
import { Box, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#e8e9ef",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  main: {
    backgroundColor: "#e8e9ef",
  },
}));

function Main() {
  const classes = useStyles();

  const users = useSelector((state) => {
    const authId = state.users.authId;
    return state.users.items.filter((user) => {
      return user.id !== authId;
    });
  });

  return users.map((user) => {
    return (
      <div className={classes.main}>
        <NavLink to={`/chat/${user.id}`} className={classes.link}>
          <List dense className={classes.root}>
            <ListItem key={user.id} button>
              <ListItemAvatar>
                <Avatar src={`/static/images/avatar.jpg`} />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </NavLink>
      </div>
    );
  });
}

export default Main;
