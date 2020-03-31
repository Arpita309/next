import React, { Component } from 'react';
import Note from "./Note";
import Header from '../components/Navbar';
import {firestore,auth} from '../firebase/fire';
import {CardBody,CardText} from 'reactstrap';
import Card from './main';

  
class Home extends Component {

  constructor(props) {
    super(props);
    this.state= {
      noteText: '',
      notes: [
        {todo:""}
      ],
      id:[]  };
   
  }
 
    componentDidMount(){
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log('user logged in: ', user);
          firestore.collection('todos').get().then(querySnapshot => {
            
          querySnapshot.docs.forEach(doc=>{
            
           
           
           this.setState({notes:doc.data(),id:doc.id
           });
           //const data=doc.data();
          // console.log(data);
           
             })});
        } else {
          console.log('user logged out');
          
        }
      })
    }

 
        
   
   
  
 


  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }
  
  

  handleKeyPress = (event) => {
    if(event.key === "Enter"){
     // let noteArr = this.state.notes;
     // noteArr.push(this.state.noteText);
    //  this.setState({ noteText: ''});
    firestore.collection('todos').add({
      todo:this.state.noteText
    })
    this.setState({ noteText: ''});
      
    }
  }

  deleteNote (index){
    let noteArr = this.state.notes;
    noteArr.splice(index, 1);
    this.setState({ notes: noteArr })
  }
  

  render() {

   
     console.log(this.state.notes) ;
     console.log(this.state.id) ;
    

    return (
      <div>
         
          <Header/>
          
          
             <Card notes={this.state.notes} id={this.state.id}/>
        
          
    
        <div className="container">
        <div className="button " onClick={noteText => this.updateNoteText(noteText)} style ={{fontStyle:"oblique",marginBottom:"10px",marginTop:"80px", color:"#E54E65"}}>Add note</div>
        <input  style={{backgroundColor:"#E2CEEE"}} placeholder="Enter Notes" type="text" className="input "
        ref={((input) => {this.textInput = input})}
        value={this.state.noteText}
        onChange={noteText => this.updateNoteText(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}
        />
        </div>
      </div>
    );
  }
}


export default Home;
