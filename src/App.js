import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import NoteForm from "../src/Components/NoteForm/NoteForm";
import NoteEdit from "../src/Components/EditNote/EditNote";
import NoteCard from "../src/Components/NoteCard/NoteCard";
import NoteList from "../src/Components/NoteList/NoteList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <Route exact path="/" render={props => <EditNote />} />
          <Route exact path="/" render={props => <NoteForm />} />
          <Route exact path="/" render={props => <NoteCard />} />
          <Route exact path="/" render={props => <NoteList />} />
        </div>
      </div>
    );
  }
}

export default App;
