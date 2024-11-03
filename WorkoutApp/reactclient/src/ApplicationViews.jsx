import { Outlet, Route, Routes } from "react-router-dom";
import {ReadytoWorkout} from "./ReadytoWorkout";
import { UserList } from "./UserProfile/UserProfileList.jsx";
import { UserDetails } from "./UserProfile/UserProfileDetails.jsx";
import {RandomWorkout} from './RandomWorkout/RandomWorkout.jsx';
import { useState } from "react";
import Header from "./Header.jsx";
import { Workout } from "./Workouts/Workout.jsx";
import RandomWorkoutList from  './RandomWorkout/RandomWorkoutList.jsx'
import './App.css'

export default function ApplicationViews({isLoggedIn}) {
  
   return(
        <Routes>
            <Route
            path=""
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Outlet/>
              </>
            }
          >

          <Route path="/" element={<ReadytoWorkout />} />
          <Route path="/user" element={< UserList/>} />
          <Route path="/users/:userId" element={<UserDetails/>} /> 
          <Route path="/fullBody" element={<RandomWorkout/>} />
         <Route path ="/planWorkout" element={<Workout/>}/>
          <Route path="workoutList" element={<RandomWorkoutList/>}/>
          </Route>
        </Routes>
        
     )};
  