import React, { useContext, useState } from "react";
import app, { chatContext } from "../../base";
import { AuthContext } from "../Auth"
import { Navbar, Container, Button, Col } from "react-bootstrap";
import userMock from "../images/user-mock.png"
import {useCollectionData} from "react-firebase-hooks/firestore"
import "./chat.css"
import Loading from "../loading/Loading";


const Chat = () => {
  const {firestore, firebase} = useContext(chatContext)
  const {currentUser} = useContext(AuthContext)
  const [value, setValue] = useState("")
  const [massages, loading] = useCollectionData(
    firestore.collection("massages").orderBy("createdAt")
  ) 

  async function sandMassage () {
    await firestore.collection("massages").add({
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      email: currentUser.email,
      imageURL: currentUser.photoURL,
      text: value,
      userId: currentUser.uid
    });
    setValue("")
  }
  console.log(massages)

  if(loading)return <Loading />

  return (
    <div>
    <Navbar bg="primary" variant="dark">
      <Container className = "d-flex justify-content-end" >
        <Button variant="outline-dark" onClick={() => app.auth().signOut()}>Sign out</Button>
      </Container>
    </Navbar>
    <Container style = {{width:"100%",height: "80vh"}} className = "pt-4">
      <Container style = {{height:"80%"}} className = "border border-secondary">
          {massages.map(massage=>{
            return(
              <div className = "d-flex" 
              style={{justifyContent:massage.userId===currentUser.uid?"end":"start"}}>
                <div>
                <Col xs={6} md={4}>
                  <img src={`${massage.imageURL? massage.imageURL: userMock}`} style = {{width:"50px",height:"50px", borderRadius:"5px"}} alt = "user"/>
                  {massage.email}
                </Col>
                <div className = "d-flex">
                  <div 
                  className = {`${massage.userId===currentUser.uid?"bg-info":"bg-warning"}`}  
                  style = {{borderRadius:"5px", padding:"7px"}}
                  >
                    {massage.text}
                    </div>
                </div>
                </div>
              </div>
            )}
          )}
      </Container>
      <input className = "m-0 mt-4 p-2" value = {value} onChange = {(e)=>setValue(e.target.value)} style = {{width:"100%"}}/>
      <div className = "d-flex justify-content-end">
        <Button onClick = {sandMassage} variant="outline-success" style = {{width:"35%"}} className = "p-1" >Send</Button>
      </div>
    </Container>
    </div>
  );
};

export default Chat;
