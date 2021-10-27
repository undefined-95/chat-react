import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/features/users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  logo: {
    textDecoration: "none",
    color: "white",
  },
}));

function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(LogOut());
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const authId = useSelector((state) => state.users.authId);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/chat" className={classes.logo}>
              Way-Chat
            </NavLink>
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <NavLink to={`/profile/${authId}`} className={classes.link}>
                <MenuItem onClick={handleClose}>Мой кабинет</MenuItem>
              </NavLink>
              <MenuItem onClick={handleLogout}>Выйти</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
