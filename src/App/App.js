import React, { Component } from 'react';
import './App.css';
import { ReservationsDisplay } from '../Components/ReservationsDisplay/ReservationsDisplay';



class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          reservations: data
        });
      });
    }

  render() {
    const reservations = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsDisplay reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
