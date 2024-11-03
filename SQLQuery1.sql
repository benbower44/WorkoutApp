-- Creating tables
CREATE TABLE UserProfile (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE muscle_groups (
    id INT IDENTITY(1,1) PRIMARY KEY,
    muscle VARCHAR(50)
);

CREATE TABLE MuscleWorkout (
    id INT IDENTITY(1,1) PRIMARY KEY,
    muscleId INT FOREIGN KEY REFERENCES muscle_groups(id),
    rep INT,
    sets INT
);

CREATE TABLE workout (
    id INT IDENTITY(1,1) PRIMARY KEY,
    muscleWorkoutId INT FOREIGN KEY REFERENCES MuscleWorkout(id),
    day DATE,
    UserProfileId INT FOREIGN KEY REFERENCES UserProfile(id),
    name VARCHAR(100)
);

CREATE TABLE RandomWorkout (
    id INT IDENTITY(1,1) PRIMARY KEY,
    back VARCHAR(50),
    bicep VARCHAR(50),
    chest VARCHAR(50),
    shoulders VARCHAR(50),
    triceps VARCHAR(50),
    legs VARCHAR(50),
    abs VARCHAR(50)
);