function ActivityLog() {

  const activities = [
    {
      text: "Research Agent completed web analysis",
      time: "2 minutes ago"
    },
    {
      text: "Coding Agent generated new API code",
      time: "5 minutes ago"
    },
    {
      text: "Marketing Agent created LinkedIn content",
      time: "10 minutes ago"
    },
    {
      text: "System health check completed",
      time: "15 minutes ago"
    }
  ]


  return (

    <div className="rounded-xl border p-5 bg-card mt-8">

      <h2 className="text-xl font-bold mb-5">
        Recent Activity
      </h2>


      <div className="space-y-4">

        {
          activities.map((activity, index) => (

            <div 
              key={index}
              className="flex justify-between items-center"
            >

              <p>
                ✅ {activity.text}
              </p>


              <span className="text-sm text-muted-foreground">
                {activity.time}
              </span>

            </div>

          ))
        }

      </div>


    </div>

  )
}


export default ActivityLog