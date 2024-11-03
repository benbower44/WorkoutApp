import React, { useEffect, useState } from 'react';
import { deleteRandomWorkout, getAllRandomWorkouts } from '../Managers/RandomWorkoutManager.jsx';


function RandomWorkoutList() {
    const [workouts, setWorkouts] = useState([]);


    useEffect(() => {
     getAllRandomWorkouts().then((data)=>setWorkouts(data))
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteRandomWorkout(id)
            setWorkouts(workouts.filter(workout => workout.id !== id));
        } catch (err) {
            console.log("Failed to delete the workout.");
        }
    };

    return (
        <div>
            <h2>Random Workouts</h2>
            {workouts.length === 0 ? (
                <p>No workouts available.</p>
            ) : (
                <ul className="workout-list">
                    {workouts.map(workout => (
                        <li key={workout.id} className="workout-item">
                            <p><strong>Back:</strong> {workout.back}</p>
                            <p><strong>Bicep:</strong> {workout.bicep}</p>
                            <p><strong>Chest:</strong> {workout.chest}</p>
                            <p><strong>Shoulders:</strong> {workout.shoulders}</p>
                            <p><strong>Triceps:</strong> {workout.triceps}</p>
                            <p><strong>Legs:</strong> {workout.legs}</p>
                            <p><strong>Abs:</strong> {workout.abs}</p>
                            <button onClick={() => handleDelete(workout.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RandomWorkoutList;