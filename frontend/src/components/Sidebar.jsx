import {
  LayoutDashboard,
  Bot,
  Workflow,
  BarChart3,
  Settings,
} from "lucide-react"

import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        FlowOS
      </h1>

      <nav className="space-y-4">

        <Link
          to="/"
          className="flex gap-3 items-center hover:text-blue-600 transition"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/agents"
          className="flex gap-3 items-center hover:text-blue-600 transition"
        >
          <Bot size={20} />
          Agents
        </Link>

        <Link
          to="/workflows"
          className="flex gap-3 items-center hover:text-blue-600 transition"
        >
          <Workflow size={20} />
          Workflows
        </Link>

        <Link
          to="/analytics"
          className="flex gap-3 items-center hover:text-blue-600 transition"
        >
          <BarChart3 size={20} />
          Analytics
        </Link>

        <Link
          to="/settings"
          className="flex gap-3 items-center hover:text-blue-600 transition"
        >
          <Settings size={20} />
          Settings
        </Link>

      </nav>

    </aside>
  )
}

export default Sidebar