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
      initialWorkoutData: [
        {key: '1', coreExercise: '', limbExercise: '' },
        {key: '2', coreExercise: '', limbExercise: '' },
        {key: '3', coreExercise: '', limbExercise: '' },
        {key: '4', coreExercise: '', limbExercise: '' },
        {key: '5', coreExercise: '', limbExercise: '' },
        {key: '6', coreExercise: '', limbExercise: '' },
        {key: '7', coreExercise: '', limbExercise: '' },
        {key: '8', coreExercise: '', limbExercise: '' },
      ],
      get workoutData () {return JSON.parse(JSON.stringify(this.initialWorkoutData))}
    }

    console.log(this.state.workoutLibrary)
  }

  workoutChange = e => {
    console.log('Value: ', e.target.value,'\nName: ', e.target.name)
    const keys = e.target.name.split(',')
    let workoutData = this.state.workoutData
    workoutData[keys[0]][keys[1]] = e.target.value
    this.setState({workoutData})
  }

  resetWorkout = e => {
    let workoutData = JSON.parse(JSON.stringify(this.state.initialWorkoutData))
    this.setState({workoutData})
  }

  generateWorkout = e => {
    console.log(this.state)
    let workoutData = this.state.workoutData, coreExList = Object.assign([], this.state.workoutLibrary.coreLib), limbExList = Object.assign([], this.state.workoutLibrary.limbLib)
    let currentCoreIndex = coreExList.length, currentLimbIndex = limbExList.length, temporaryValue, randomIndex
    console.log(coreExList, limbExList)
    while ( 0 !== currentCoreIndex ) {
      randomIndex = Math.floor(Math.random() * currentCoreIndex)
      currentCoreIndex -= 1
      console.log(currentCoreIndex, coreExList.length)
      temporaryValue = coreExList[currentCoreIndex]
      coreExList[currentCoreIndex] = coreExList[randomIndex]
      coreExList[randomIndex] = temporaryValue
    }

    while ( 0 !== currentLimbIndex ) {
      randomIndex = Math.floor(Math.random() * currentLimbIndex)
      currentLimbIndex -= 1
      temporaryValue = limbExList[currentLimbIndex]
      limbExList[currentLimbIndex] = limbExList[randomIndex]
      limbExList[randomIndex] = temporaryValue
    }

    console.log(limbExList,coreExList)

    workoutData.map(round => {
      round.coreExercise = (round.coreExercise) ? round.coreExercise : coreExList.pop()
      let existsArray = workoutData.map(rnd => (rnd.key === round.key)?'':rnd.coreExercise)
      while (typeof(existsArray.find(el => el.toLowerCase() === round.coreExercise.toLowerCase())) !== 'undefined') {
        round.coreExercise = coreExList.pop()
      }
      round.limbExercise = (round.limbExercise) ? round.limbExercise : limbExList.pop()
      existsArray = workoutData.map(rnd => (rnd.key === round.key)?'':rnd.limbExercise)
      while (typeof(existsArray.find(el => el.toLowerCase() === round.limbExercise.toLowerCase())) !== 'undefined') {
        round.limbExercise = limbExList.pop()
      }      
      return round
    })

    this.setState({workoutData})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type='button' name='generateWorkoutButton' value='Generate Random Workout' onClick={this.generateWorkout} />
          <WorkoutTable workoutData={this.state.workoutData} workoutChange={this.workoutChange} />
          <input type='button' name='resetWorkoutButton' value='Clear Workout' onClick={this.resetWorkout} />
        </header>
      </div>
    );
  }
}

export default App;
