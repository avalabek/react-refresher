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
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.randomBetween = this.randomBetween.bind(this);
  }

  componentWillMount(){
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px'),
      transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
    }
  }
randomBetween(x,y,s){
  return x + Math.ceil(Math.random() * (y-x)) + s

}

 edit() {
   this.setState({
     editing: true
   })
 }
  remove() {
    this.props.onRemove(this.props.index)
  }
  save(e) {
    e.preventDefault()
    this.props.onChange(this._newText.value, this.props.index)
    this.setState({
      editing: false
    })
    
  }
renderForm(){
  return(
    <div className="note"
         style={this.style}>
      <form onSubmit={this.save}>
        <textarea ref={input =>this._newText= input} />
        <button onSubmit={this.save}><FaFloppyO /></button>
      </form>  
    </div>  
  )
}
  
    
  
  
  renderDisplay(){
    return (
      <div className="note"
           style={this.style}>
        <p>{this.props.children}</p>
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
    return this.state.editing ? this.renderForm():this.renderDisplay()
    
  }
}


export default Note;