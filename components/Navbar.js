import Head from 'next/head';
import Link from  'next/link';
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label,NavLink } from 'reactstrap';
  

  class Header extends Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
          isNavOpen: false,
            isModalOpen: false,
            isSignupOpen:false
        
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
      }

      
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      toggleSignup() {
        this.setState({
          isSignupOpen: !this.state.isSignupOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
     handleSignUp(event) {
      this.toggleSignup();
      alert("Firstname: "+this.firstname.value+"Lastname: "+this.lastname.value+"Username: " + this.username.value + " Password: " + this.password.value
         );
      event.preventDefault();

  }

  


    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        
                        <NavbarBrand className="mr-auto"  style={{fontSize:"30px" ,fontFamily:"cursive",color:"#D6E149"}}>Todo App</NavbarBrand>
                        
                            
                            
                            <Nav className="ml-auto " navbar >
                            <div className="btn-group mr-auto" role="group" aria-label="Basic example">
                                <button type="button"  onClick={this.toggleModal} className="btn btn-warning" style={{paddingRight:"4px"}}>Login</button>
                                <button type="button"  onClick={this.toggleSignup} className="btn btn-success" >Signup</button>
                                
                                
                              </div>
                                    
                                
                            </Nav>
                    
                    </div>
                </nav>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>              
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
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
<Modal isOpen={this.state.isSignupOpen} toggle={this.toggleSignup}> 
                <ModalHeader toggle={this.toggleSignup}>SignUp</ModalHeader>              
                <ModalBody>
                    <Form onSubmit={this.handleSignUp}>
                    <FormGroup>
                                <Label htmlFor="firstname">Firstname</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={(input) => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Lastname</Label>
                                <Input type="text" id="lastname" name="lastname"
                                    innerRef={(input) => this.lastname = input} />
                            </FormGroup>
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
                            
                            <Button type="submit" value="submit" color="primary">SignUp</Button>
                        </Form>
                    </ModalBody>

</Modal>

            </div>
        );
    }
}
export default Header;