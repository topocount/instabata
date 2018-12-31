import React, { Component } from 'react';
import Table from 'rc-table'


class WorkoutTable extends Component {
    workoutchange = this.props.workoutChange
    columns = [
        { title: 'Round', dataIndex: 'key', key: 'Round', width: 80 },
        { 
            title: 'Core',
            dataIndex: 'coreExercise',
            key: 'coreExercise',
            width: 100,
            render(value, row, index) {
                let inputName = String(index) + ',coreExercise'
                return <input type='text' name={inputName} placeholder='Enter an exercise' value={value} onChange={WorkoutTable.workoutchange} />
            }
        },
        { 
            title: 'Upper/Lower Body',
            dataIndex: 'limbExercise',
            key: 'limbExercise',
            width: 200,
            render(value, row, index) {
                let inputName = String(index) + ',limbExercise'
                return <input type='text' name={inputName} placeholder='Enter an exercise' value={value} onChange={WorkoutTable.workoutchange} />
            }
        }
    ]
    render() {
        return (
            <Table 
                columns={this.columns} 
                data={this.props.workoutData} 
                onRow={(record, index) => ({
                    onChange: this.workoutchange
                })}
            />
        )
    }
}

export default WorkoutTable