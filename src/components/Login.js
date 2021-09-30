import React, { useCallback, useContext } from "react";
import { Card, Container, Button  } from "react-bootstrap";
import { withRouter, Redirect} from "react-router";
import app from "../base.js";
import { AuthContext } from "./Auth.js";
import { NavLink } from "react-router-dom"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container style = {{maxWidth:"600px"}}  className = "pt-4">
      <Card>
        <h1 className = "text-center mb-4">Login</h1>
        <div  className = "container d-flex justify-content-center p-4" >
        <form style = {{width:"80%"}}  onSubmit={handleLogin}>
          <label >
            <input style = {{width:"100%"}} className = "p-2" name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <input style = {{width:"100%"}} className = "p-2" name="password" type="password" placeholder="Password" />
          </label>
          <div style = {{width:"100%"}} className = "d-flex justify-content-center">
            <Button style = {{width:"40%"}} className = "btn btn-success" type="submit">Log in</Button>
          </div>
        </form>
        </div>
        <NavLink className = "d-flex justify-content-center" to = "/signup"> Sign Up </NavLink>
      </Card>
    </Container>
  );
};

export default withRouter(Login);