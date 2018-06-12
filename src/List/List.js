import React, { Component } from 'react';


class List extends Component {
  constructor(props){
    super(props);
    this.state = "";
  
  
  const animals = [
  { name: 'zebra'},
  {name: 'giraffe'},
  {name: 'lion'},
  {name: 'gazelle'}

]

const element = <ol> 
  {animals.map((animal)=> (
    <li>{animal.name}</li>
  ))}
</ol>

}
}
export default List; 