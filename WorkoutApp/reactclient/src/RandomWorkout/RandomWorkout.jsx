import React, { useState, useEffect } from "react";
import {
  addRandomWorkout,
  getRandomWorkout,
} from "../Managers/RandomWorkoutManager";

export const RandomWorkout = () => {
  const [randomWorkout, setRandomWorkout] = useState([]);
  const [editedWorkout, setEditedWorkout] = useState({});
  const [newWorkout, setNewWorkout] = useState({
    back: "",
    bicep: "",
    chest: "",
    shoulders: "",
    triceps: "",
    legs: "",
    abs: "",
  });

  const fetchRandomWorkout = async () => {
    try {
      getRandomWorkout().then((data) => setRandomWorkout(data).then(setEditedWorkout(data)));
    } catch (error) {
      console.error("Error fetching random workout:", error);
    }
  };

  const handleAddRandomWorkout = async (event) => {
    addRandomWorkout(newWorkout);
  };

      const handleUpdateWorkout = async () => {
          if (randomWorkout) {
              try {
                  await RandomWorkoutManager.updateRandomWorkout(randomWorkout.id, randomWorkout);
                  fetchRandomWorkout();
              } catch (error) {
                  console.error("Error updating workout:", error);
              }
          }
      };

      // const handleDeleteWorkout = async () => {
      //     if (randomWorkout) {
      //         try {
      //             await RandomWorkoutManager.deleteRandomWorkout(randomWorkout.id);
      //             setRandomWorkout(null);
      //         } catch (error) {
      //             console.error("Error deleting workout:", error);
      //         }
      //     }
      // };

  useEffect(() => {
    getRandomWorkout().then((data) => {setRandomWorkout(data);setEditedWorkout(data[0])});
  }, []);

  return (
    <div>
      <h2>Random Workout</h2>

      {randomWorkout.map((random) => {
        return (
          <div>
            <div>
                <form>
              <p>
                <strong>Back:</strong>{" "}
                <input
                  onChange={(event) => {
                    const workoutCopy = { ...editedWorkout };
                    workoutCopy.back = event.target.value;
                    setEditedWorkout(workoutCopy);
                  }}
                  defaultValue={random.back}
                ></input>
              </p>
              <p>
                <strong>Bicep:</strong>{" "}
                <input onChange={(event) => {
                    const workoutCopy = { ...editedWorkout };
                    workoutCopy.bicep = event.target.value;
                    setEditedWorkout(workoutCopy);
                  }}defaultValue={random.bicep}></input>
              </p>
              <p>
                <strong>Chest:</strong>{" "}
                <input onChange={(event) => {
                    const workoutCopy = { ...editedWorkout };
                    workoutCopy.chest = event.target.value;
                    setEditedWorkout(workoutCopy);
                  }}defaultValue={random.chest}></input>
              </p>
              <p>
                <strong>Shoulders:</strong>{" "}
                <input  onChange={(event) => {
                    const workoutCopy = { ...editedWorkout };
                    workoutCopy.shoulders = event.target.value;
                    setEditedWorkout(workoutCopy);
                  }}defaultValue={random.shoulders}></input>
              </p>
              <p>
                <strong>Triceps:</strong>{" "}
                <input  onChange={(event) => {
                    const workoutCopy = { ...editedWorkout };
                    workoutCopy.triceps = event.target.value;
                    setEditedWorkout(workoutCopy);
                  }}defaultValue={random.triceps}></input>
              </p>
              <p>
                <strong>Legs:</strong>{" "}
                <input  onChange={(event) => {
                    const workoutCopy = { ...editedWorkout };
                    workoutCopy.legs = event.target.value;
                    setEditedWorkout(workoutCopy);
                  }}defaultValue={random.legs}></input>
              </p>
              <p>
                <strong>Abs:</strong> <input  onChange={(event) => {
                    const workoutCopy = { ...editedWorkout };
                    workoutCopy.abs = event.target.value;
                    setEditedWorkout(workoutCopy);
                  }}defaultValue={random.abs}></input>
              </p>
              
               <button onClick={()=>handleUpdate}>Update Workout</button>
                {/* <button onClick={handleDeleteWorkout}>Delete Workout</button>  */}
                    </form>
            </div>
            
          </div>
        );
      })}

      <h3>Add New Workout</h3>
      <form>
        <input
          type="text"
          placeholder="Back"
          value={newWorkout.back}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, back: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Bicep"
          value={newWorkout.bicep}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, bicep: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Chest"
          value={newWorkout.chest}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, chest: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Shoulders"
          value={newWorkout.shoulders}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, shoulders: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Triceps"
          value={newWorkout.triceps}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, triceps: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Legs"
          value={newWorkout.legs}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, legs: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Abs"
          value={newWorkout.abs}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, abs: e.target.value })
          }
        />
        <button onClick={(e) => handleAddRandomWorkout(e)}>Create Workout</button>
      </form>
    </div>
  );
};
