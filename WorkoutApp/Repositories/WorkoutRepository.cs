using Microsoft.Data.SqlClient;
using WorkoutApp.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using WorkoutApp.Utils.DbUtils;

namespace WorkoutApp.Repositories
{
    public class WorkoutRepository : BaseRepository, IWorkoutRepository
    {
        public WorkoutRepository(IConfiguration configuration) : base(configuration) { }

       public List<Workout> GetWorkoutById(int id)
{
    using (var conn = Connection)
    {
        conn.Open();
        using (var cmd = conn.CreateCommand())
        {
            cmd.CommandText = @"
                SELECT Id, Name, MuscleWorkoutId, Day, UserProfileId
                FROM workout 
                WHERE Id = @Id";

            DbUtils.AddParameter(cmd, "@Id", id);

            var workouts = new List<Workout>();

            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                var workout = new Workout()
                {
                    Id = DbUtils.GetInt(reader, "Id"),
                    Name = DbUtils.GetString(reader, "Name"),
                    MuscleWorkoutId = DbUtils.GetInt(reader, "MuscleWorkoutId"),
                    UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                };

                // Add the workout to the list
                workouts.Add(workout);
            }

            reader.Close();

            return workouts;
        }
    }
}

        public void AddWorkout(Workout workout)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                INSERT INTO Workout (MuscleWorkoutId, Day, UserProfileId, Name)
                OUTPUT INSERTED.ID
                VALUES (@MuscleWorkoutId, @Day, @UserProfileId, @Name)";

                    // Adding parameters to the command
                    DbUtils.AddParameter(cmd, "@MuscleWorkoutId", workout.MuscleWorkoutId);
                    DbUtils.AddParameter(cmd, "@Day", workout.Day);
                    DbUtils.AddParameter(cmd, "@UserProfileId", workout.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Name", workout.Name);

                    // Set the newly inserted ID back to the workout object
                    workout.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void DeleteWorkout(Workout workout)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                DELETE FROM workout
                WHERE Id = @Id";

                    // Adding parameter for workout ID
                    DbUtils.AddParameter(cmd, "@Id", workout.Id);

                    // Execute the command (no need for a reader, since it's a DELETE query)
                    cmd.ExecuteNonQuery();
                }
            }
        }


        public void UpdateWorkout(Workout workout)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                UPDATE workout
                   SET Name = @Name,
                       MuscleWorkoutId = @MuscleWorkoutId,
                       Day = @Day,
                       UserProfileId = @UserProfileId
                 WHERE Id = @Id";

                    // Adding parameters to the SQL query
                    DbUtils.AddParameter(cmd, "@Name", workout.Name);
                    DbUtils.AddParameter(cmd, "@MuscleWorkoutId", workout.MuscleWorkoutId);
                    DbUtils.AddParameter(cmd, "@Day", workout.Day);
                    DbUtils.AddParameter(cmd, "@UserProfileId", workout.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Id", workout.Id);

                    // Execute the update query
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}