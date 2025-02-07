import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0]);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {user && (
        <div className="bg-white shadow-lg rounded-lg p-6 flex w-96 border border-gray-300">
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-24 h-24 rounded-lg border border-gray-400"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{user.name.first} {user.name.last}</h2>
            <p className="text-gray-600"><strong>Gender:</strong> {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
