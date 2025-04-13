"use client"

import React, { useState, useRef, useEffect } from "react"
import { X, MapPin, Star, Search } from "lucide-react"

// Sample initial filter state
const initialFilters = {
  location: {
    applied: 16,
    options: [
      { id: "india1", label: "India", checked: false },
      { id: "uk", label: "United Kingdom", checked: false },
      { id: "usa1", label: "United States of America", checked: true },
      { id: "saudi", label: "Saudi Arabia", checked: false },
      { id: "usa2", label: "United States of America", checked: false },
      { id: "singapore", label: "Singapore", checked: false },
      { id: "india2", label: "India", checked: false },
      { id: "taiwan", label: "Taiwan", checked: false },
      { id: "france", label: "France", checked: false },
      { id: "usa3", label: "United States of America", checked: false },
      { id: "germany", label: "Germany", checked: false },
      { id: "china", label: "China", checked: false },
    ],
  },
  score: {
    applied: 1,
    options: [],
  },
}

export default function FilterDialog({ onClose, onApply }) {
  const [filters, setFilters] = useState(initialFilters)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("location")
  const dialogRef = useRef(null)

  const totalApplied = Object.values(filters).reduce(
    (sum, category) => sum + category.applied,
    0
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleCheckboxChange = (categoryId, optionId) => {
    setFilters((prev) => {
      const category = { ...prev[categoryId] }
      const options = [...category.options]

      const optionIndex = options.findIndex((opt) => opt.id === optionId)
      if (optionIndex >= 0) {
        options[optionIndex] = {
          ...options[optionIndex],
          checked: !options[optionIndex].checked,
        }
      }

      return {
        ...prev,
        [categoryId]: {
          ...category,
          options,
        },
      }
    })
  }

  const filteredOptions =
    filters[activeCategory]?.options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []

  const handleClearAll = () => {
    onClose()
  }

  const handleApply = () => {
    onApply(filters)
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div ref={dialogRef} className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded">
              <SlidersHorizontal className="w-5 h-5 text-gray-800" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Filters</span>
                <span className="text-blue-600 text-sm">{totalApplied} applied</span>
                <button onClick={handleClearAll} className="text-blue-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-600">See results in your view based on the filters you select here.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 border-r p-2 overflow-y-auto">
            <button
              className={`flex items-center gap-2 p-2 rounded-md w-full text-left mb-2 ${activeCategory === "location" ? "bg-blue-50" : ""}`}
              onClick={() => setActiveCategory("location")}
            >
              <MapPin className="w-5 h-5 text-gray-700" />
              <span>Location</span>
              <span className="ml-auto bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                2
              </span>
            </button>
            <button
              className={`flex items-center gap-2 p-2 rounded-md w-full text-left ${activeCategory === "score" ? "bg-blue-50" : ""}`}
              onClick={() => setActiveCategory("score")}
            >
              <Star className="w-5 h-5 text-gray-700" />
              <span>Score</span>
              <span className="ml-auto bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                1
              </span>
            </button>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Category header */}
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-blue-600 flex items-center gap-1">
                    16 applied
                    <button>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">Select options to filter results</div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-2 gap-4">
                {filteredOptions.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.id}
                      checked={option.checked}
                      onChange={() => handleCheckboxChange(activeCategory, option.id)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={option.id} className="ml-2 text-sm text-gray-700">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t flex justify-between">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper component for the SlidersHorizontal icon
function SlidersHorizontal(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" x2="20" y1="4" y2="4" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="20" y2="20" />
      <line x1="9" x2="9" y1="2" y2="6" />
      <line x1="14" x2="14" y1="10" y2="14" />
      <line x1="9" x2="9" y1="18" y2="22" />
    </svg>
  )
}
