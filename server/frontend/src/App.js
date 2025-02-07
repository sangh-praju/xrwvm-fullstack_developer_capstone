import LoginPanel from "./components/Login/Login";  // Import the Login component
import Register from "./components/Register/Register";  // Import the Register component
import { Routes, Route } from "react-router-dom";  // Import necessary components for routing

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />  {/* This is the Login page route */}
      <Route path="/register" element={<Register />} />  {/* This is the Register page route */}
    </Routes>
  );
}

export default App;
