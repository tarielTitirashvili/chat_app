import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";
import { Container, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom"


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Container style = {{maxWidth:"600px"}}  className = "pt-4">
      <Card>
        <h1 className = "text-center mb-4">Sign up</h1>
        <div className = "container d-flex justify-content-center p-4" >
          <form style = {{width:"80%"}}  onSubmit={handleSignUp}>
            <label>
              <input  style = {{width:"100%"}} className = "p-2" name="email" type="email" placeholder="Email" />
            </label>
            <label>
              <input style = {{width:"100%"}} className = "p-2" name="password" type="password" placeholder="Password" />
            </label>
            <div style = {{width:"100%"}} className = "d-flex justify-content-center">
            <Button style = {{width:"40%"}} className = "btn btn-success" type="submit">Sign Up</Button>
            </div>
          </form>
        </div>
        <NavLink className = "d-flex justify-content-center" to = "/login"> Login </NavLink>
      </Card>
    </Container>
  );
};

export default withRouter(SignUp);
