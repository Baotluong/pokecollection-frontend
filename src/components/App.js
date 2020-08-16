import React from 'react';
import './App.css';
import SignUp from './SignUp/SignUp';
import GameBoard from './GameBoard/GameBoard';

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
      await this.postTrainer();
      this.setState({ loading: false });
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleNameClick = async () => {
    this.setState({ loading: true });
    await this.postTrainer();
    this.setState({ loading: false });
  }

  handlePackClick = async (pack) => {
    if (this.state.currency < pack.cost) return console.log('Insufficient funds.');
    this.setState({ loading: true });
    await this.postPack(pack);
    this.setState({ loading: false });
  }

  postTrainer = async () => {
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

  postPack = async (pack) => {
    const res = await fetch(`${url}/pokeCollection/pack`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ trainerId: this.state._id, packType: pack.name }),
    });
    if (!res.ok) console.log(res.err);
    const data = await res.json();
    if (data) {
      this.setState((prevState) => ({
        currency: prevState.currency - pack.cost,
        pokecollection: {
          pokemons: [...prevState.pokecollection.pokemons, ...data],
        },
      }));
    }
  }

  render() {
    return <div className='game-page'>
      {this.loading ?
        <div>loading...</div>
        :
          !this.state._id ?
            <SignUp
              name={this.state.name}
              handleNameChange={this.handleNameChange}
              handleKeyPress={this.handleKeyPress}
              handleNameClick={this.handleNameClick}
            />
          :
            <GameBoard
              state={this.state}
              handlePackClick={this.handlePackClick}
            />
    }
    </div>;
  }
}

export default App;
