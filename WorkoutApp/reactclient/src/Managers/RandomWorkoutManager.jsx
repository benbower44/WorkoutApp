const apiUrl = "http://localhost:5001/api/RandomWorkout"; // Adjust the base URL as needed


   export const getRandomWorkout = async () => {
    return await fetch(`https://localhost:5001/api/RandomWorkout/generate`).then((res)=>res.json())
    }
    export const getAllRandomWorkouts = async () => {
        const response = await fetch(`https://localhost:5001/api/RandomWorkout`);
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to fetch workouts.");
    }

    export const addRandomWorkout= async (randomWorkout) => {
        const response = await fetch(`https://localhost:5001/api/RandomWorkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(randomWorkout),
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to add random workout.");
    }

    export const updateRandomWorkout= async (randomWorkout) => {
        const response = await fetch(`https://localhost:5001/api/RandomWorkout/${randomWorkout.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(randomWorkout),
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to update random workout.");
    }

    export const deleteRandomWorkout= async (id) => {
      return await fetch(`https://localhost:5001/api/RandomWorkout/${id}`, {
            method: "DELETE",
        });
    }
