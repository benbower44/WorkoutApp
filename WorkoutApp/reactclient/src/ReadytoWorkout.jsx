import React from "react";


export const ReadytoWorkout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#f0f8ff", // Light blue background
        padding: "20px", // Add padding for small screens
        textAlign: "center", // Center text
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff", // White background for the content box
          padding: "40px",
          borderRadius: "10px", // Rounded corners
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          maxWidth: "600px", // Limit the width for readability
          width: "100%", // Ensure responsiveness
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#0077cc", // Accent blue color for the title
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Welcome to BodyWise
        </h1>
        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#333333", // Darker text color
            marginBottom: "0",
          }}
        >
          Track your workouts, generate random routines, and keep yourself
          motivated to achieve your fitness goals. Explore our workout plans and
          build a routine that works best for you.
        </p>
      </div>
    </div>
  );
};
