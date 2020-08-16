import React from 'react';
import './App.css';

const url = 'https://pokecollection.herokuapp.com';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
const localStorageEnum = {
  trainerId: 'trainerId',
}

const defaultState = {
  _id: null,
  name: '',
  currency: 0,
  pokecollection: {},
  loading: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    if (!this.state.name) {
      const trainerId = localStorage.getItem(localStorageEnum.trainerId);
      const res = await fetch(`${url}/trainer/${trainerId}`);
      if (!res.ok) console.log(res.err);
      const data = await res.json();
      if (data) {
        this.setState({
          _id: data._id,
          name: data.name,
          currency: data.currency,
          pokecollection: {
            pokemons: data.pokecollection.pokemons,
          },
        });
      }
    }
    this.setState({ loading: false })
  }

  handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      this.setState({ loading: true });
      await this.postNewTrainer();
      this.setState({ loading: false });
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleNameClick = async () => {
    this.setState({ loading: true });
    await this.postNewTrainer();
    this.setState({ loading: false });
  }

  postNewTrainer = async () => {
    const res = await fetch(`${url}/trainer`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: this.state.name }),
    });
    if (!res.ok) console.log(res.err);
    const data = await res.json();
    if (data) {
      this.setState({
        _id: data._id,
        name: data.name,
        currency: data.currency,
        pokecollection: {
          pokemons: data.pokecollection.pokemons,
        },
      });
      localStorage.setItem(localStorageEnum.trainerId, data._id);
    }
  }

  render() {
    return <div className='game-page'>
      {this.loading ?
        <div>loading...</div>
        :
          !this.state._id ?
            <div className='sign-up'>
              <div>Hello New Trainer!</div>
              <div>
                <input
                  type='text'
                  placeholder="What's your name?"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  onKeyPress={this.handleKeyPress}
                />
                <button
                  disabled={!this.state.name}
                  onClick={this.handleNameClick}
                >Enter</button>
              </div>
            </div>
          :
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
