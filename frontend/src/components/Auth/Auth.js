import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { AUTH } from "../../constants/actionTypes";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    handleShowPassword(false);
  };
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const googleSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    const token = res.credential;
    try {
      dispatch({ type: AUTH, data: { decoded, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const GoogleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was Unsuccessful. Try Again");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{ backgroundColor: "rgba(0,183,255, 1)" }} />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "rgba(0,183,255, 1)", color: "white" }}
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid>
            <GoogleLogin
              width="362"
              onSuccess={googleSuccess}
              onError={GoogleFailure}
              useOneTap
              size="large"
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                onClick={switchMode}
                style={{ fontSize: "12px", paddingTop: "10px", margin: "10px" }}
              >
                {isSignUp
                  ? "Already have an account ? Sign In"
                  : "Don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
