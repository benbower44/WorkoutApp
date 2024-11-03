using Microsoft.Data.SqlClient;
using System;
using System.Data;
using WorkoutApp.Models;
using WorkoutApp.Utils.DbUtils;
namespace WorkoutApp.Repositories
{
    public class RandomWorkoutRepository :BaseRepository, IRandomWorkoutRepository
    {

        public RandomWorkoutRepository(IConfiguration config) : base(config) { }


        // Get a random workout
        public List<RandomWorkout> GetRandomWorkout()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT TOP 1 * FROM RandomWorkout ORDER BY NEWID()";
                    var reader = cmd.ExecuteReader();
                    var randomWorkout = new List<RandomWorkout>();

                    while (reader.Read())
                    {
                        randomWorkout.Add(new RandomWorkout()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Back = reader.GetString(reader.GetOrdinal("Back")),
                            Bicep = reader.GetString(reader.GetOrdinal("Bicep")),
                            Chest = reader.GetString(reader.GetOrdinal("Chest")),
                            Shoulders = reader.GetString(reader.GetOrdinal("Shoulders")),
                            Triceps = reader.GetString(reader.GetOrdinal("Triceps")),
                            Legs = reader.GetString(reader.GetOrdinal("Legs")),
                            Abs = reader.GetString(reader.GetOrdinal("Abs"))
                        });
                    }

                    reader.Close();
                    return randomWorkout;
                }
            }
        }
        public List<RandomWorkout> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM RandomWorkout";
                    var reader = cmd.ExecuteReader();
                    var randomWorkout = new List<RandomWorkout>();

                    while (reader.Read())
                    {
                        randomWorkout.Add(new RandomWorkout()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Back = reader.GetString(reader.GetOrdinal("Back")),
                            Bicep = reader.GetString(reader.GetOrdinal("Bicep")),
                            Chest = reader.GetString(reader.GetOrdinal("Chest")),
                            Shoulders = reader.GetString(reader.GetOrdinal("Shoulders")),
                            Triceps = reader.GetString(reader.GetOrdinal("Triceps")),
                            Legs = reader.GetString(reader.GetOrdinal("Legs")),
                            Abs = reader.GetString(reader.GetOrdinal("Abs"))
                        });
                    }

                    reader.Close();
                    return randomWorkout;
                }
            }
        }

        // Add a new random workout
        public void AddRandomWorkout(RandomWorkout randomWorkout)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                INSERT INTO RandomWorkout (Back, Bicep, Chest, Shoulders, Triceps, Legs, Abs) 
                OUTPUT INSERTED.ID 
                VALUES (@Back, @Bicep, @Chest, @Shoulders, @Triceps, @Legs, @Abs)";

                    DbUtils.AddParameter(cmd, "@Back", randomWorkout.Back);
                    DbUtils.AddParameter(cmd, "@Bicep", randomWorkout.Bicep);
                    DbUtils.AddParameter(cmd, "@Chest", randomWorkout.Chest);
                    DbUtils.AddParameter(cmd, "@Shoulders", randomWorkout.Shoulders);
                    DbUtils.AddParameter(cmd, "@Triceps", randomWorkout.Triceps);
                    DbUtils.AddParameter(cmd, "@Legs", randomWorkout.Legs);
                    DbUtils.AddParameter(cmd, "@Abs", randomWorkout.Abs);

                    // Get the newly inserted RandomWorkout ID
                    int id = (int)cmd.ExecuteScalar();
                    randomWorkout.Id = id;  // Assign the ID to the RandomWorkout object
                }
            }
        }

        // Update an existing random workout
        public void UpdateRandomWorkout(RandomWorkout randomWorkout)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                UPDATE RandomWorkout
                SET Back = @Back,
                    Bicep = @Bicep,
                    Chest = @Chest,
                    Shoulders = @Shoulders,
                    Triceps = @Triceps,
                    Legs = @Legs,
                    Abs = @Abs
                WHERE Id = @Id";

                    // Bind parameters from the randomWorkout object
                    DbUtils.AddParameter(cmd, "@Back", randomWorkout.Back);
                    DbUtils.AddParameter(cmd, "@Bicep", randomWorkout.Bicep);
                    DbUtils.AddParameter(cmd, "@Chest", randomWorkout.Chest);
                    DbUtils.AddParameter(cmd, "@Shoulders", randomWorkout.Shoulders);
                    DbUtils.AddParameter(cmd, "@Triceps", randomWorkout.Triceps);
                    DbUtils.AddParameter(cmd, "@Legs", randomWorkout.Legs);
                    DbUtils.AddParameter(cmd, "@Abs", randomWorkout.Abs);
                    DbUtils.AddParameter(cmd, "@Id", randomWorkout.Id); // Ensure we update the correct workout by ID

                    // Execute the update query
                    cmd.ExecuteNonQuery();
                }
            }
        }

        // Delete a random workout by Id
        public void DeleteRandomWorkout(RandomWorkout randomWorkoutId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                DELETE FROM RandomWorkout
                WHERE Id = @Id";

                    // Bind the ID parameter to identify which workout to delete
                    DbUtils.AddParameter(cmd, "@Id", randomWorkoutId);

                    // Execute the delete command
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}