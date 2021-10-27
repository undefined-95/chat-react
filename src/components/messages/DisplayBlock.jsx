import React from "react";
import InboxMessage from "./InboxMessage";
import OutboxMessage from "./OutboxMessage";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  display: {
    height: 550,
    overflow: "auto",
  },
}));

function DisplayBlock(props) {

  const id  = Number(useParams().id);
  const classes = useStyles();
  const authId = useSelector((state) => state.users.authId);

  const messages = useSelector((state) =>{
    const authId = state.users.authId;

    return state.message.items.filter((message) => {
      return (
        (authId === message.myId && id === message.contactId)
        || (authId === message.contactId && id === message.myId)
      )
    })
    })
  ;
  return (
    <div className={classes.display}>
      {messages.map(message => {
        if(message.myId === authId){
          return <InboxMessage message={message}/>
        }
        return <OutboxMessage message={message}/>
      })}
    </div>
  );
}

export default DisplayBlock;
