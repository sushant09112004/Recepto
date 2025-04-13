"use client"

import { useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import FilterDialog from "./filter-dailog"


export default function FilterButton({ activeFiltersCount = 0, onApplyFilters }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  const handleApplyFilters = (filters) => {
    if (onApplyFilters) {
      onApplyFilters(filters)
    }
    setIsDialogOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpenDialog}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
      >
        <SlidersHorizontal className="w-5 h-5 text-gray-600" />
        <span className="text-gray-800 font-medium text-lg">Filters</span>
        {activeFiltersCount > 0 && (
          <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {isDialogOpen && <FilterDialog onClose={handleCloseDialog} onApply={handleApplyFilters} />}
    </>
  )
}
