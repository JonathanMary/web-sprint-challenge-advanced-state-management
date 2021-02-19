import React, { Component } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

  componentDidMount(){
    this.props.fetchSmurfs();
  }
  
  render() {
    return (
      <div className="App">
        {console.log("App, Inside Render: ", this.props)}
        <Header />
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("App.js state: ", state);
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
}

export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.