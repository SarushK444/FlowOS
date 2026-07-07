function AgentCard({ name, status, tasks, description }) {

  return (
    <div className="rounded-xl border p-5 bg-card">

      <div className="flex justify-between items-start">

        <h2 className="text-xl font-bold">
          {name}
        </h2>


        <span className="text-sm px-3 py-1 rounded-full bg-muted">
          {status}
        </span>

      </div>


      <p className="text-muted-foreground mt-3">
        {description}
      </p>


      <div className="mt-5">

        <p className="text-sm text-muted-foreground">
          Completed Tasks
        </p>

        <p className="text-2xl font-bold">
          {tasks}
        </p>

      </div>


      <div className="flex justify-between items-center mt-5">

        <p className="text-sm text-muted-foreground">
          Last activity: 2 min ago
        </p>


        <button className="hover:bg-muted transition px-3 py-1 rounded-lg border text-sm">
          View
        </button>

      </div>


    </div>
  )
}

export default AgentCard