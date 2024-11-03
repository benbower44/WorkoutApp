using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using WorkoutApp.Models;
using WorkoutApp.Repositories;

namespace WorkoutApp.Controllers;
[Route("api/[controller]")]
[ApiController]
public class WorkoutController : ControllerBase
{
    private readonly IWorkoutRepository _workoutRepository;

    // Constructor to inject the workout repository
    public WorkoutController(IWorkoutRepository workoutRepository)
    {
        _workoutRepository = workoutRepository;
    }

 
    // Get a specific workout by id
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var workout = _workoutRepository.GetWorkoutById(id);

        if (workout == null || workout.Count == 0)
        {
            return NotFound();
        }

        return Ok(workout);
    }


// Add a new workout
    [HttpPost]
public IActionResult Add(Workout workout)
{
    
    _workoutRepository.AddWorkout(workout);
    return CreatedAtAction("GetWorkoutById", new { id = workout.Id }, workout);
}

[HttpPut("{id}")]
public IActionResult Put(int id, Workout workout)
{
    if (id != workout.Id)
    {
        return BadRequest();
    }

    _workoutRepository.UpdateWorkout(workout);
    return NoContent();
}


// Delete a workout
[HttpDelete("{id}")]
public IActionResult Delete(Workout workoutId)
{
    _workoutRepository.DeleteWorkout(workoutId);
    return NoContent();
}
} 
