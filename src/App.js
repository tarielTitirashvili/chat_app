import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./PrivateRoute";
import { ChatProvider } from "./base";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <ChatProvider>
            <PrivateRoute exact path="/" component={Chat} />
          </ChatProvider>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;
