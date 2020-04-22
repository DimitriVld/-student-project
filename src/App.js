import React from 'react';
import AppContext from './context/AppContext';
import HomePage from "./views/pages/Home";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <HomePage />
      </AppContext.Provider>
    );
  }

}

export default App;