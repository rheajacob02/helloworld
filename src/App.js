import React, {Component} from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {Dishes} from './shared/dishes';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes: Dishes
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Risrorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
