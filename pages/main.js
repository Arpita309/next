import React, { Component } from 'react';
import {CardBody,CardText} from 'reactstrap';
class Card extends Component{
        render (){
          
                return (
                        <div className="card text-primary mb-3 mt-4 ml-3" style={{maxWidth: "50rem",fontSize:"2 px",backgroundColor:"#CE9FA1"}}>
                       
                        <div className="card-body">
                         
                <p className="card-text ">{this.props.notes}</p>
                        </div>
                      </div>
                
        
                );
        }
}
export default Card;

    