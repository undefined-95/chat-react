import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: "45%",
    display: "flex",
    fontSize: 15,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "lightblue",
    borderRadius: "10px 40px",
    marginLeft: "auto",
    marginRight: 10,
    position: "relative",
    wordBreak: "break-all",
    marginTop: 30,
  },
}));

function InboxMessage({ message }) {
  const classes = useStyles();

  return (
    <div className={classes.dialog}>
      <p>{message.text}</p>
    </div>
  );
}

export default InboxMessage;
