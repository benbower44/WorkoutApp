using WorkoutApp.Models;

namespace WorkoutApp.Repositories
{
    public interface IRandomWorkoutRepository
    {
        public List <RandomWorkout> GetRandomWorkout();
        void AddRandomWorkout(RandomWorkout randomWorkout);
        void UpdateRandomWorkout(RandomWorkout randomWorkout);
        void DeleteRandomWorkout(RandomWorkout randomWorkoutId);
        public List<RandomWorkout> GetAll();
    }
}