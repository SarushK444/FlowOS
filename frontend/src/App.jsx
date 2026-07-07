import { Routes, Route } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import TopBar from "./components/TopBar"

import Dashboard from "./pages/Dashboard"
import Agents from "./pages/Agents"
import Workflows from "./pages/Workflows"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"

function App() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1">

        <TopBar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

      </div>

    </div>
  )
}

export default App