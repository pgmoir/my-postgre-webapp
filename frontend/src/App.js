import React, { useEffect, useState } from "react";

function App() {
  const [serverTime, setServerTime] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((res) => res.json())
      .then((data) => setServerTime(data.time))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>React Frontend</h1>
      <p>
        Server time:{" "}
        {serverTime ? serverTime.now : "Loading... (check backend connection)"}
      </p>
    </div>
  );
}

export default App;
