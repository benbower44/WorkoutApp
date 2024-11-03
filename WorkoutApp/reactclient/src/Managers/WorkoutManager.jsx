const baseUrl = "http://localhost:5001/api/planWorkout"; // Adjust the base URL as needed

    // Get all workouts
    export const getAllWorkouts = async () => {
        const response = await fetch(`${baseUrl}`);
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to fetch workouts.");
    }

    // Get a workout by ID
    export const getWorkoutById = async (id) => {
        const response = await fetch(`${baseUrl}/${id}`);
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to fetch workout.");
    }

    // Add a new workout
    export const addWorkout = async (workout) => {
        const response = await fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(workout),
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to add workout.");
    }

    // Update an existing workout
    export const updateWorkout = async (id, workout) => {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(workout),
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error("Failed to update workout.");
    }

    // Delete a workout
   export const deleteWorkout = async (id) => {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete workout.");
        }
    }
