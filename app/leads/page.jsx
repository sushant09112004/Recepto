import LeadCards from '@/components/leads/LeadCrads'
import PostCard from '@/components/leads/postcard'
import JobCard from '@/components/leads/SingleCard'
import React from 'react'
import Navbar from '@/components/navbar/navbar'
function page() {
  return (
    <div>
      <div className='flex justify-between items-center w-full p-4'>
      </div>
        <Navbar/>
        <PostCard/>
        {/* <LeadCards/> */}

        {/* <JobCard/> */}
    </div>
  )
}

export default page