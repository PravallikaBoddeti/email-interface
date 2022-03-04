import { useState } from "react";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login setLogin={setLogin} />} />
          {login && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
      </Router>
    </>
  );
}

export default App;
