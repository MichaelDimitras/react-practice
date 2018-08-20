import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import List from './list.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios.get('/players')
      .then(data => {
        this.setState({players: data.data.Players});
      })
      .catch(err => console.error('Error getting data from server', err));
  }

  render() {
    return (
      <div>
        <h1>Football</h1>
        <List players={this.state.players}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
