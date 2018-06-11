import React, {Component} from 'react';
import Note from '../Note'
import './Board.css';

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [{
          id: 0,
          note: "call Lisa"
        },
        {id: 1,
        note: "email Bart"
      },
        {
          id: 2,
          note: "This is a very long note because I want to take a good look at the font. I love fonts. This one is Rock Salt.Text seems to be centered on the note. Do I like that?"
        }]
    }
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  update(newText, i){
    console.log("updateing item at index", i, newText)
    this.setState(prevState=>({
      notes: prevState.notes.map(
        note=> (note.id !=i) ? note : {...note, note: newText}
      )
    }))
  }

  remove(id){
    console.log('removing item at', id)
    this.setState(prevState=> ({
      notes: prevState.notes.filter(note=>note.id !=id)
    }))
  }
  eachNote(note, i){
    return(
      <Note key ={i}
            index={i}
            onChange={this.update}
            onRemove={this.remove}>
            {note.note}
      </Note>
    )
  }
  render(){
  return(
    <div className= "board" >
      {this.state.notes.map(this.eachNote)}
    </div>

  )
}
}
export default Board;