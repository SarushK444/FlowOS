import AgentCard from "../components/AgentCard"
import StatCard from "../components/StatCard"
import ActivityLog from "../components/ActivityLog"

function Dashboard() {

  return (
    <main className="p-6">

      <h1 className="text-3xl font-bold">
        AI Agent Control Center 🚀
      </h1>

      <p className="mt-2 text-muted-foreground">
        Monitor and manage your autonomous agents
      </p>

      <div className="grid grid-cols-4 gap-5 mt-8">

  <StatCard
    title="Total Agents"
    value="12"
    icon="🤖"
  />

  <StatCard
    title="Active Tasks"
    value="48"
    icon="⚡"
  />

  <StatCard
    title="Success Rate"
    value="98%"
    icon="📈"
  />

  <StatCard
    title="API Usage"
    value="72%"
    icon="🔌"
  />

</div>

      <div className="grid grid-cols-3 gap-5 mt-8">

        <AgentCard
          name="Research Agent"
          status="Running 🟢"
          tasks="124"
          description="Collects and analyzes information"
        />

        <AgentCard
          name="Coding Agent"
          status="Processing 🟡"
          tasks="56"
          description="Builds and debugs applications"
        />

        <AgentCard
          name="Marketing Agent"
          status="Idle ⚪"
          tasks="20"
          description="Creates marketing content"
        />

      </div>

      <ActivityLog />
      
    </main>
  )
}

export default Dashboard