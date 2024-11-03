const apiUrl = "https://localhost:5001";

export const login = (userObject) => {
  return fetch(`${apiUrl}/api/UserProfile/GetByEmail?email=${userObject}`)
  .then((r) => r.json())
    .then((userProfile) => {
      if(userProfile.id){
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        return userProfile
      }
      else{
        return undefined
      }
    });
};

export const logout = () => {
      localStorage.clear()
};

export const register = (userObject, password) => {
  return  fetch(`${apiUrl}/api/UserProfile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject, password),
  })
  .then((response) => response.json())
    .then((savedUserProfile) => {
      localStorage.setItem("UserProfile", JSON.stringify(savedUserProfile))
    });
};

export const getAllUsers = () => {
  return fetch(`${apiUrl}/api/UserProfile`)
          .then((res) => res.json())
};

export const getUserById = (userId) => {
  return fetch(`${apiUrl}/api/UserProfile/${userId}`)
      .then(response => response.json());
};

export const updateUserType = (user) => {
  return fetch(`${apiUrl}/api/UserProfile/${user.id}`, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
  })
} 