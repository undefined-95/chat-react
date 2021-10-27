import React from "react";
import HeaderMessage from "./HeaderMessage";
import InputMessage from "./InputMessage";
import DisplayBlock from "./DisplayBlock";

function Messages() {
  return (
    <div style={{ height: "100vh" }}>
      <HeaderMessage />
      <DisplayBlock />
      <InputMessage />
    </div>
  );
}

export default Messages;
