import React from 'react';
import './App.css';

const url = 'https://pokecollection.herokuapp.com';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const defaultState = {
  id: null,
  name: '',
  currency: 0,
  pokecollection: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  componentDidMount (){
    if (!this.state.name) {
      const trainerId = localStorage.getItem('trainerId');
      fetch(`${url}/trainer/${trainerId}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            _id: data._id,
            name: data.name,
            currency: data.currency,
            pokecollection: data.pokecollection,
          });
        });
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleNameClick = () => {
    fetch(`${url}/trainer`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: this.state.name }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          _id: data._id,
          name: data.name,
          currency: data.currency,
          pokecollection: data.pokecollection,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div className='game-page'>
      {!this.state._id &&
        <div className='sign-up'>
          <div>Hello New Trainer!</div>
          <div>
            <input
              type='text'
              placeholder="What's your name?"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button
              disabled={!this.state.name}
              onClick={this.handleNameClick}
            >Enter</button>
          </div>
        </div>
      }
      {this.state._id && 
        <div className='game-board'>game board</div>
      }
    </div>;
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
