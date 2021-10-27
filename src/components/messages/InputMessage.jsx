import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  InputBase,
  Divider,
  IconButton,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "100%",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function InputMessage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const authId = useSelector((state) => state.users.authId);
  const [message, setMessage] = useState({
    myId: authId,
    contactId: "",
    text: "",
  });

  const handleAddMessage = () => {
    dispatch({ type: "add/message/fulfilled", payload: { message, id } });
  };
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        onChange={(ev) => setMessage({ ...message, text: ev.target.value })}
        className={classes.input}
        placeholder="Введите сообщение..."
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={handleAddMessage}
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}

export default InputMessage;
