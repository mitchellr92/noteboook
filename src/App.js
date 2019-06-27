import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import NoteForm from "../src/Components/NoteForm/NoteForm";
// import EditNote from "../src/Components/EditNote/EditNote";
// import Note from "../src/Components/Note/Note";
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
          <Route exact path="/" render={props => <NoteList />} />
          <Route exact path="/notes/form" render={props => <NoteForm />} />
          {/* // <Route exact path="/notes/id" render={props => <Note />} />
          // <Route exact path="/notes/edit/:id" render={props => <EditNote />} /> */}
        </div>
      </div>
    );
  }
}

export default App;
