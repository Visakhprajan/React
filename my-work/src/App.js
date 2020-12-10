import { Component } from 'react';
import './App.scss';
import Person from './Person/person';


class App extends Component{
    state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29},
      { name: 'Stapanie', age: 28 },
    ]
  }
  nameSwitchHandler = () =>{
    console.log('clicked')
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stapanie', age: 28 },
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.nameSwitchHandler }>Switcher</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}


export default App;
