import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios.get('/characters')
      .then(data => {
        this.setState({people: data.data.results});
      })
      .catch(err => console.error('Error getting data from server', err));
  }

  render() {
    return (
      <h1>Star Wars</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
