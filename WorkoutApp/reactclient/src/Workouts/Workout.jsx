import React, { useState, useEffect } from 'react';
import { getAllWorkouts } from '../Managers/WorkoutManager.jsx';
import { addWorkout } from '../Managers/WorkoutManager.jsx';


export const Workout = () => {
    const [workouts, setWorkouts] = useState([]);
    const [newWorkout, setNewWorkout] = useState({
        name: '',
        sets: '',
        reps: '',
        category: '',
        date: '',
    });
    const [editingWorkout, setEditingWorkout] = useState(null);

    // Fetch all workouts when the component mounts
    // useEffect(() => {
    //     fetchWorkouts();
    // }, []);

    // const fetchWorkouts = async () => {
    //     try {
    //         const data = await getAllWorkouts();
    //         setWorkouts(data);
    //     } catch (error) {
    //         console.error('Error fetching workouts:', error);
    //     }
    // };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewWorkout({ ...newWorkout, [name]: value });
    };

    const handleAddWorkout = async (event) => {
        event.preventDefault();
        try {
            if (editingWorkout) {
                await WorkoutManager.updateWorkout(editingWorkout.id, newWorkout);
                setEditingWorkout(null);
            } else {
                await WorkoutManager.addWorkout(newWorkout);
            }
            setNewWorkout({ name: '', sets: '', reps: '',  category: '', date: '' });
            fetchWorkouts();
        } catch (error) {
            console.error('Error adding/updating workout:', error);
        }
    };

    const handleEditWorkout = (workout) => {
        setEditingWorkout(workout);
        setNewWorkout({
            name: workout.name,
            sets: workout.sets,
            reps: workout.reps,
            category: workout.category,
            date: workout.date,
        });
    };

    const handleDeleteWorkout = async (id) => {
        try {
            await WorkoutManager.deleteWorkout(id);
            fetchWorkouts();
        } catch (error) {
            console.error('Error deleting workout:', error);
        }
    };

    return (
        <div>
            <h1>Let's Plan a Workout</h1>
            <form onSubmit={handleAddWorkout}>
                <input
                    type="text"
                    name="name"
                    placeholder="Workout Name"
                    value={newWorkout.name}
                    onChange={handleInputChange}
                    required
                   
                />
                <input
                    type="number"
                    name="sets"
                    placeholder="Sets"
                    value={newWorkout.sets}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="reps"
                    placeholder="Reps"
                    value={newWorkout.reps}
                    onChange={handleInputChange}
                    required
                />
                
                <input
              type="text"
               placeholder="Category"
               value={newWorkout.category}
               onChange={(e) =>
                 setNewWorkout({ ...newWorkout, category: e.target.value })
               }
             />
                <input
                    type="date"
                    name="date"
                    value={newWorkout.date}
                    onChange={handleInputChange}
                    required
                />
                 
              
          
                <button type="submit">{editingWorkout ? 'Update Workout' : 'Add Workout'}</button>
                {editingWorkout && <button onClick={() => setEditingWorkout(null)}>Cancel Edit</button>}
            </form>

            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>
                        <p>
                            <strong>{workout.name}</strong> - {workout.sets} sets, {workout.reps} reps, {workout.duration}, {workout.date}
                        </p>
                        <button onClick={() => handleEditWorkout(workout)}>Edit</button>
                        <button onClick={() => handleDeleteWorkout(workout.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

