
using Microsoft.AspNetCore.Mvc;
using WorkoutApp.Models;
using WorkoutApp.Repositories;
namespace WorkoutApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RandomWorkoutController : ControllerBase
    {
        private readonly IRandomWorkoutRepository _randomWorkoutRepository;

        public RandomWorkoutController(IRandomWorkoutRepository randomWorkoutRepository)
        {
            _randomWorkoutRepository = randomWorkoutRepository;
        }

        // GET: api/randomworkout/generate
        [HttpGet("generate")]
        public ActionResult<RandomWorkout> GenerateRandomWorkout()
        {
            var randomWorkout = _randomWorkoutRepository.GetRandomWorkout();
            if (randomWorkout == null)
            {
                return NotFound("No random workouts available.");
            }
            return Ok(randomWorkout);
        }
        [HttpGet]
        public ActionResult<RandomWorkout> Get()
        {
            var randomWorkout = _randomWorkoutRepository.GetAll();
            if (randomWorkout == null)
            {
                return NotFound("No random workouts available.");
            }
            return Ok(randomWorkout);
        }

        // POST: api/randomworkout
        [HttpPost]
        public IActionResult AddRandomWorkout([FromBody] RandomWorkout workout)
        {
            if (ModelState.IsValid)
            {
                _randomWorkoutRepository.AddRandomWorkout(workout);
                return Ok("Random workout added successfully.");
            }
            return BadRequest("Invalid workout data.");
        }

        // PUT: api/randomworkout/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateRandomWorkout(int id, [FromBody] RandomWorkout workout)
        {
            if (id != workout.Id)
            {
                return BadRequest("Workout ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                _randomWorkoutRepository.UpdateRandomWorkout(workout);
                return Ok("Random workout updated successfully.");
            }
            return BadRequest("Invalid workout data.");
        }

        // DELETE: api/randomworkout/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteRandomWorkout(RandomWorkout randomWorkoutId)
        {
            _randomWorkoutRepository.DeleteRandomWorkout(randomWorkoutId);
            return Ok("Random workout deleted successfully.");
        }
    }
}