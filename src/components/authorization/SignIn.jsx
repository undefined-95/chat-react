import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../redux/features/users";
import useStyles from "./style";
import Copyright from "./Copyright";

function SignIn(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    props.users.map((item) => {
      if (item.login === login && item.password === password) {
        auth(item.id);
        dispatch(auth(item.id));
        history.push("/");
      }
    });
  };

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Адрес эл. почты"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleLogin}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassword}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Войти
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authId: (id) => dispatch(auth(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SignIn);
