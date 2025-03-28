import React, { useState } from 'react';

const GetUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleFetchUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setError('');
      } else {
        setUser(null);
        setError(data.message);
      }
    } catch (err) {
      console.error('Error fetching user:', err);
      setError('Something went wrong! Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 w-full mb-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border p-2 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button 
          onClick={handleFetchUser} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Get User
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {user && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <h3 className="text-lg font-semibold">User Details:</h3>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUser;
