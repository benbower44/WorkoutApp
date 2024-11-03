using WorkoutApp.Models;

namespace WorkoutApp.Repositories;
public interface IWorkoutRepository
{
  
   List <Workout> GetWorkoutById(int id);
    void AddWorkout(Workout workout);
    void UpdateWorkout(Workout workout);
    void DeleteWorkout(Workout workoutId);
 
}