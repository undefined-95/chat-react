import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Main from "./main/Main";
import SignIn from "./authorization";
import Header from "./main/Header";
import Shape from "./Profile/Shape";
import { useSelector } from "react-redux";
import Messages from "./messages/Messages";

function App() {
  const authId = useSelector((state) => state.users.authId);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {authId ? (
          <>
            <Route exact path={"/chat"} component={Main} />
            <Route path={`/chat/:id`} component={Messages} />
            <Route path={`/profile/${authId}`} component={Shape} />
            <Redirect to={"/chat"} />
          </>
        ) : (
          <>
            <Route exact path={"/login"} component={SignIn} />
            <Redirect to={"/login"} exact />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
