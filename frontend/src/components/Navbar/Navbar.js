import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import memories from "../../images/memories-Text.png";
import memories1 from "../../images/Facebook_and_Social_Media-09-512.webp";
import useStyles from "./styles";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from "jwt-decode";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
        <img
          className={classes.image}
          src={memories1}
          alt="memories"
          height="60"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.decoded ? (
          <div className={classes.profile}>
            <Avatar
              alt={user?.decoded?.name}
              className={classes.purple}
              src={user?.decoded?.picture}
            >
              {user?.decoded?.name}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.decoded?.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            style={{ backgroundColor: "rgba(0,183,255, 1)", color: "white" }}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
