import LeadsDashboard from '@/components/leads/Dashboard/LeadDashboard'
import React from 'react'
import { DataTable } from '@/components/DataTable/DataTable'
import { columns } from '@/components/DataTable/colums'

function page() {
  const data = [
    {
      id: "team-001",
      Team: "Olivia Rhye",
      Role: "Admin",
      Generated: "123",
      Assigned: "12",
      Unlocked :"22",
      Last : " Last Activate 2min ago"
    },
    {
      id: "team-002",
      Team: "Olivia Rhye",
      Role: "Removed",
      Generated: "23",
      Assigned: "23",
      Unlocked :"22",
      Last : " Last Activate 2min ago"

    },
    {
      id: "team-003",
      Team: "Olivia Rhye",
      Role: "Memeber",
      Generated: "56",
      Assigned: "56",
      Unlocked :"22",
      Last : " Last Activate 2min ago"

    },
    {
      id:"team-004",
      Team: "Olivia Rhye",
      Role: "Admin",
      Generated: "123",
      Assigned: "123",
      Unlocked :"22",
      Last : " Last Activate 2min ago"

    }
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