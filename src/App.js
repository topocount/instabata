import React, { Component } from 'react';
import './App.css';
import {limbExercises, coreExercises} from './workouts.js';
import WorkoutTable from './WorkoutTable';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutLibrary: {
        coreLib: coreExercises,
        limbLib: limbExercises
      },
      workoutData: [
        {key: '1', coreExercise: 'situps', limbExercise: 'pushups' },
        {key: '2', coreExercise: 'V-Ups', limbExercise: 'Burpees' },
        {key: '3', coreExercise: '', limbExercise: '' },
        {key: '4', coreExercise: '', limbExercise: '' },
        {key: '5', coreExercise: '', limbExercise: '' },
        {key: '6', coreExercise: '', limbExercise: '' },
        {key: '7', coreExercise: '', limbExercise: '' },
        {key: '8', coreExercise: '', limbExercise: '' },
      ]
    }
  }

  workoutChange = e => {
    console.log('Value: ', e.target.value,'\nName: ', e.target.name)
    const keys = e.target.name.split(',')
    let workoutData = this.state.workoutData
    //workoutData[keys[0]].keys[1]
    workoutData[keys[0]][keys[1]] = e.target.value
    this.setState({workoutData})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WorkoutTable workoutData={this.state.workoutData} workoutChange={this.workoutChange} />
        </header>
      </div>
    );
  }
}

export default App;
