// app/dashboard/page.tsx (or page.js)
"use client";

import React from 'react';
import useUser from '@/hooks/useUser';
import FilterButton from '@/components/filter/filter-button';
const DashboardPage = () => {
  const { user } = useUser();
  const handleApplyFilters = (filters) => {
    console.log("Applied filters:", filters)
    // Handle the applied filters here
  }
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? (
        <div className="mt-4">
          <p>Welcome, {user.name}!</p>
          <p>Your role is: {user.role}</p>
          <FilterButton activeFiltersCount={2} onApplyFilters={handleApplyFilters} />
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default DashboardPage;
