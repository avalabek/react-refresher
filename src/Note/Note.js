import React, {Component} from 'react';
import './Note.css';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaAdjust from 'react-icons/lib/fa/adjust';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import FaBicycle from 'react-icons/lib/fa/bicycle';


class Note extends Component {
  constructor(props){
    super(props);
    this.state ={
      editing: false
    }
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this. renderDisplay.bind(this);
    this.save = this.save.bind(this);
  }
 edit() {
   this.setState({
     editing: true
   })
 }
  remove() {
    alert('removing note')
  }
  save() {
    alert('saved')
  }
renderForm(){
  return(
    <div className="note">
      <form>
        <textarea />
        <button onClick={this.save}><FaFloppyO /></button>
      </form>  
    </div>  
  )
}
  
    
  
  
  renderDisplay(){
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
            <button onClick={this.edit} id="edit"><FaPencil />Edit</button>
            <button onClick={this.remove} id="remove"><FaTrash />Remove</button>
          <button id="adjust"><FaAdjust /></button>
          <button id="bicylce"><FaBicycle /></button>
        </span>
      </div>  
    )
  }

  render(){
    if (this.state.editing){
      return this.renderForm()
    }else {
      return this.renderDisplay()
    }
  }
}


export default Note;