import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label,NavLink } from 'reactstrap';
import Head from 'next/head';
import {firestore,auth} from '../firebase/Fire'
//import Header from '../components/Navbar';

const todoRef = firestore.collection("todos");

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      isUpdate:false,
      update:''
    }
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  addTodo = (e) => {
    e.preventDefault()

    const ref = todoRef.doc()
    ref.set({
      task: this.state.todo,
      createdAt:(new Date()).getTime(),
      done: false,
      id: ref.id
    })
    .then(function(docRef) {
      console.log(docRef)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    
  }
  toggleUpdate() {
    this.setState({
      isUpdate: !this.state.isUpdate
    });
  }
  updateTodo=(e)=>{
    this.toggleUpdate();
    e.preventDefault();
    const a=e.target
    const b=this.state.update
    const ref = todoRef.doc()
    todoRef.doc(b).update({
     task :this.username.value
      
  })
    .then(function(docRef) {
      console.log(docRef)
    })
    .catch(function(error) {
      console.error("Error updating document: ", error);
    });
    
  }

  deleteTodo = (e) => {
    todoRef.doc(e.target.value).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }
  handleUpdate = (e) => {
    this.toggleUpdate();
    const t = e.target
    this.setState({
      update: t.value
    })
  }

  handleChange = (e) => {
    const t = e.target
    this.setState({
      [t.name]: t.value,
      
    })
  }

  componentWillMount () {
    todoRef.orderBy('createdAt').onSnapshot((docSnapShot) => {
      let todos = []
      docSnapShot.forEach(doc => {todos.push(doc.data())})
      this.setState({
        todos,
        loaded: true
      })
    })
    

  }
  

  renderTodoList () {
    const ListItem = this.state.todos.map((todo, index) => {
      return (
        <div className="card text-dark mb-3 mt-4 ml-3" style={{maxWidth: "50rem",backgroundColor:"#e6ff99"}}>
        <div className="card-content">
                

               
                       
        <div className="card-body">
         
     <p className="card-text "><h3>{todo.task}</h3></p>
     

        
      
     
      <button value={todo.id} className="btn btn-sm btn-danger" onClick={this.deleteTodo} style={{float:"right"}}>X</button>
      <button  value={todo.id} className="btn btn-sm btn-info" onClick={this.handleUpdate} style={{float:"right"}}>Update</button>
     
      <Modal isOpen={this.state.isUpdate} toggle={this.toggleUpdate}> 
                <ModalHeader toggle={this.toggleUpdate}>Update</ModalHeader>              
                <ModalBody>
                    <Form  onSubmit={this.updateTodo}>
                    
                               
                            <FormGroup>
                                <Label htmlFor="username">Task</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            
                            
                            <Button type="submit" value={todo.id}color="primary">Update</Button>
                        </Form>
                    </ModalBody>

</Modal>
 
 </div>
 </div>
 </div>
      )
    })

    return (
      <div>
{ListItem}
      </div>
        
     
    )
  }

  render() {
    console.log(this.state);
    console.log(this.state.notes)
    
    return (
      
      <div className="App">
        <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"></link>
      </Head>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        
                        <NavbarBrand className="mr-auto"  style={{fontSize:"30px" ,fontFamily:"cursive",color:"#D6E149"}}>Todo App</NavbarBrand>
                        
                            
                            
                            
                    </div>
                </nav>
        
        <form onSubmit={this.addTodo}>
          <div className="input-group">
            <input type="text"  onChange={this.handleChange} name="todo" style={{backgroundColor:"#E2CEEE",marginTop:"20px",marginLeft:"8px"}} />
            <button className="btn btn-primary" type="submit" onClick={this.addTodo} style={{marginTop:"20px",marginLeft:"8px"}}>Add Todo</button>
          </div>
        </form>
        {this.renderTodoList()}
      </div>
    );
  }
}

export default App;
