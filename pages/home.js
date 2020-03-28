import React, { Component } from 'react';
import Note from "./Note";
import Header from '../components/Navbar';

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

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
      deleteMethod={ () => this.deleteNote(key) }
       />
    })

    return (
      <div>
         
          <Header/>
        
        {notes}
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