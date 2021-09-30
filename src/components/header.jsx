import React from "react"
import app from "../base"
import { Navbar, Container, Button } from "react-bootstrap"


export default function Header(props) {
    

    return(
        <Navbar bg="primary" variant="dark">
        <Container className = "d-flex justify-content-end" >
        <Button  variant="outline-dark">logOut</Button>
        </Container>
      </Navbar>
    )
}