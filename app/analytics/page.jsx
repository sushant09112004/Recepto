import LeadsDashboard from '@/components/leads/Dashboard/LeadDashboard'
import React from 'react'
import { DataTable } from '@/components/DataTable/DataTable'
import { columns } from '@/components/DataTable/colums'

function page() {
  const data = [
    {
      id: "team-001",
      Team: "Frontend Team",
      Role: "Developer",
      Generated: "2025-04-10",
      Assigned: "2025-04-11",
    },
    {
      id: "team-002",
      Team: "Backend Team",
      Role: "API Designer",
      Generated: "2025-04-09",
      Assigned: "2025-04-12",
    },
    {
      id: "team-003",
      Team: "DevOps",
      Role: "Cloud Engineer",
      Generated: "2025-04-08",
      Assigned: "2025-04-10",
    },
  ]
  
  return (
    <div className=' flex flex-col gap-4 justify-center '>
        <LeadsDashboard/>
      <div className='flex flex-col gap-4'>
        <DataTable columns={columns} data={data} />
        </div>
    </div>
  )
}

export default page