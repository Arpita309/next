import Head from 'next/head';
import Link from  'next/link';
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label,NavLink } from 'reactstrap';
  import {auth }from '../firebase/fire';

  class Header extends Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
          isNavOpen: false,
            isModalOpen: false
        
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        
      }

     
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        auth().signInWithEmailAndPassword(this.username.value, this.password.value).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
         
          // [END_EXCLUDE]
        });
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return(
            <div>
                 <nav style={{backgroundColor:'black',fontStyle:'Italic', color:'White',marginBottom:'25px', fontSize:"30px"}}>
                      <div style={{marginLeft:"600px"}}>
                      Todo App
                      </div>
    
                       
                                <NavItem>
                                    <Button  style={{marginLeft:"1300px",background:"#b3f0ff",float:"right"}}  onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            
                        
                    
                </nav>
                
                    
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin} style={{}}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Header;