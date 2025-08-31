import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from  "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import TaskManager from "./pages/TaskManager";
import Summarizer from "./pages/Summarizer";
import Chatbot from "./pages/Chatbot";
import EmailGenerator from "./pages/EmailGenerator";
import Recommendations from "./pages/Recommendations";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="task" element={<TaskManager />} />
          <Route path="summarizer" element={<Summarizer />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="email" element={<EmailGenerator />} />
          <Route path="recommendations" element={<Recommendations />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
