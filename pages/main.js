import React, { Component } from 'react';
import {CardBody,CardText} from 'reactstrap';
import {firestore} from '../firebase/fire';
  
class Card extends Component{

       // deleteTodo (id) {
            //    firestore.collection('todos').doc(id).delete();
           //     } 
    
           
        
         render(){
           console.log(this.props.id);
           console.log(this.props.notes);
                return (
<div>
                        
                                        <div className="card text-dark mb-3 mt-4 ml-3" style={{maxWidth: "50rem",backgroundColor:"#e6ff99"}}>
                        <div className="card-content">
                                <div className="level">

                                <div className="level-left">
                                <div className="level-item">
                                       
                        <div className="card-body">
                         
                     <p className="card-text "><h3>{this.props.notes.todo}</h3></p>
                     <p className="card-text "><h3> {this.props.id}</h3></p>
               
                        </div>
                      </div>
                      </div>
                      <div className="level-right">
                      <div className="level-item">
                     <button type="button"    className="btn btn-danger" style={{float:"right"}}>Delete</button>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                  </div>
                        
                      
                        
                 
                );
        }}

export default Card;

/*{this.props.notes.forEach(todo => {
        <li>{todo}</li>    
    })}*/