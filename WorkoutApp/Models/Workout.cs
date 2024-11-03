namespace WorkoutApp.Models;
public class Workout
{
    public int Id { get; set; }
    public int MuscleWorkoutId { get; set; }
    public string Day { get; set; }
    public int UserProfileId { get; set; }
    public string Name { get; set; }
}

