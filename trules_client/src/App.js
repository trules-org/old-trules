import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import EventDefsListWithData from './components/EventDefsListWithData';

const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <div className="App">
           <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h2>Welcome to trules</h2>
           </div>
           <EventDefsListWithData />
         </div>
       </ApolloProvider>
    );
  }
}

export default App;
