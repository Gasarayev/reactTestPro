import React, {Component} from 'react'
import User from './componts/user'
import Navbar from './componts/navbar'
import Users from './componts/users';
import './App.css';
import AddUser from './componts/AddUser';

class App extends Component {
  
  render() {
   
    return (
      <div className="container">

        <Navbar title='User App' />
        <hr />
        <AddUser/>
        <Users/>

      </div>
    )
  }
}


export default App
