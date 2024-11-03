﻿using WorkoutApp.Models;
namespace WorkoutApp.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
       
    }
}