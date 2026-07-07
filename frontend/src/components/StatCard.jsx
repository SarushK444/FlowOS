function StatCard({ title, value, icon }) {
  return (
    <div className="rounded-xl border p-5 bg-card">

      <div className="flex items-center justify-between">

        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <span>
          {icon}
        </span>

      </div>


      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>


    </div>
  )
}

export default StatCard