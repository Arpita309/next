import React, { Component } from 'react';
import Note from "./Note";
import Header from '../components/Navbar';
import {firestore,auth} from '../firebase/fire';
import Card from'./main'
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
      firestore.collection('users').get().then(querySnapshot => {
        const note = querySnapshot.docs.map(doc => doc.data());
        console.log(note);
        <Card note={note.note}/>
        
      });
    } else {
      console.log('user logged out');
      
    }
  })
class Home extends Component {

  constructor(props) {
    super(props);
    this.state= {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }
  
  addNote() {
    if (this.state.noteText === '') {return}
    let noteArr = this.state.notes;
    noteArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();

  }

  handleKeyPress = (event) => {
    if(event.key === "Enter"){
      let noteArr = this.state.notes;
      noteArr.push(this.state.noteText);
      this.setState({ noteText: ''});
    }
  }

  deleteNote (index){
    let noteArr = this.state.notes;
    noteArr.splice(index, 1);
    this.setState({ notes: noteArr })
  }

  render() {

    

    return (
      <div>
         
          <Header/>
        
        
        <div className="container">
        <div className="button " onClick={this.addNote.bind(this)} style ={{fontStyle:"oblique",marginBottom:"10px",marginTop:"80px", color:"#E54E65"}}>Add note</div>
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