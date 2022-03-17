import React from 'react';
import './App.css';
import Profile from './Profile';

class App extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      firstName : 'Alex',
      lastName : 'Miller',
      age: 25
    }
  }

  addOneUnitToage(){
    this.setState({
      age : this.state.age + 1
    });
  }

  printHello(){
    console.log( "Hey ther Josh!" );
  }

  render(){
    let instructor = 'Alfredo Salazar';

    return(
      <div className='container'>
        <Profile fN={this.state.firstName} 
                 lastName={this.state.lastName} 
                 age={this.state.age}
                 instructor={instructor}
                 printHello={this.printHello}/>
                 
        <button onClick={() => this.addOneUnitToage()}>
          Add one to age
        </button>
      </div>
    );
  }
}

export default App;
