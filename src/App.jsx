
import React, { useState } from 'react';
import Login from './Login';

const App = () => {
 
  const [user, setUser] = useState(null);

  return (
    <div>
      {/* Agar user login hai, toh unka welcome message dikhayenge */}
      {user ? (
        <h2>Welcome, {user.displayName}</h2>
      ) : (
        // Agar user login nahi hai, toh Login component ko show karenge
        <Login />
      )}
    </div>
  );
};

export default App;
