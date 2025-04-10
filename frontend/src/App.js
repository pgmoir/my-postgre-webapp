import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>React Frontend</h1>
      <p>
        Users:
        {users ? users.map(u => (
          <p key={u.id}>
            {u.name} - {u.email}
          </p>
        )) : "Loading... (check backend connection)"}
      </p>
    </div>
  );
}

export default App;
