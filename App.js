import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercises from './pages/AddExercises';
import Timer from './pages/Timer';
import { useState } from 'react';

function App() {
    // const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <header>
              <h1>Workout Timer</h1>
              <p>Use this app to track and time your workout!</p>
            </header>
            <nav>
              <a href="/">Home</a>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <HomePage />

          </Route>
          <Route path="/add-exercises">
            <header>
              <h1>Workout Timer</h1>
            </header>
            <nav>
              <a href="/">Home</a>
            </nav>
            <br></br>

            <AddExercises />

          </Route>
          <Route path="/timer">
            <header>
              <h1>Workout Timer</h1>
            </header>
            <nav>
              <a href="/">Home</a>
            </nav>
            <br></br>
            <br></br>
            <Timer />

          </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;