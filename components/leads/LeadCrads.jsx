"use client"

import { useState } from "react"
import { MapPin, Clock, ThumbsUp, ThumbsDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Define the data structure for our leads

export default function LeadCards() {
  // Sample data array for the leads
  const [leads, setLeads] = useState([
    {
      id: "1",
      name: "Jen",
      location: "Mumbai, India",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        '"Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ..."',
      timePosted: "2 hour ago",
      timeLabel: "Found",
      score: 99,
      coins: 3,
      source: "ReceptoNet",
      hasUnlocked: false,
      assignable: false,
    },
    {
      id: "2",
      name: "Jennifer Markus",
      location: "Mumbai, India",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "A team from *company name mentioned* is seeking a highly motivated Business Development Executive to outreach and secure bo...",
      timePosted: "3 hours ago",
      timeLabel: "",
      score: 74,
      coins: 0,
      organization: {
        name: "Org's Network",
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
      source: "Group name",
      hasUnlocked: false,
      assignable: true,
    },
    {
      id: "3",
      name: "Jennifer",
      location: "Mumbai, India",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        '"Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ..."',
      timePosted: "2 hour ago",
      timeLabel: "Found",
      score: 99,
      coins: 0,
      source: "ReceptoNet",
      hasUnlocked: false,
      assignable: false,
    },
    {
      id: "4",
      name: "Jennifer Markus",
      location: "Mumbai, India",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "A team from *company name mentioned* is seeking a highly motivated Business Development Executive to outreach and secure bo...",
      timePosted: "Today",
      timeLabel: "",
      score: 74,
      coins: 3,
      organization: {
        name: "Org's Network",
      },
      source: "Group name",
      hasUnlocked: true,
      assignable: false,
    },
    {
      id: "5",
      name: "Jennifer Markus",
      location: "Mumbai, India",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "A team from *company name mentioned* is seeking a highly motivated Business Development Executive to outreach and secure bo...",
      timePosted: "3 hours ago",
      timeLabel: "",
      score: 74,
      coins: 0,
      organization: {
        name: "Org's Network",
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
      source: "Group name",
      hasUnlocked: false,
      assignable: true,
    },
    {
      id: "6",
      name: "Jennifer Markus",
      location: "Mumbai, India",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "A team from *company name mentioned* is seeking a highly motivated Business Development Executive to outreach and secure bo...",
      timePosted: "3 hours ago",
      timeLabel: "",
      score: 74,
      coins: 0,
      organization: {
        name: "Org's Network",
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
      source: "Group name",
      hasUnlocked: false,
      assignable: true,
    },
  ])

  // Toggle the like/dislike state
  const toggleReaction = (id) => {
    // Implementation would go here
    console.log(`${type} toggled for lead ${id}`)
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
      {leads.map((lead) => (
        <div
          key={lead.id}
          className={`border rounded-lg p-4 flex flex-col ${lead.id === "1" || lead.id === "3" ? "border-l-4 border-l-blue-500" : ""}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10 border">
                  <img src={lead.avatar || "/placeholder.svg"} alt={lead.name} className="object-cover" />
                </Avatar>
                {!lead.hasUnlocked && (
                  <div className="absolute -top-1 -left-1 bg-white p-0.5 rounded-full border">
                    <div className="bg-gray-100 rounded-full p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="font-medium">{lead.name}</div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {lead.location}
                </div>
              </div>
            </div>

            {lead.organization && (
              <div className="flex items-center gap-2">
                {lead.organization.avatars ? (
                  <div className="flex -space-x-2">
                    {lead.organization.avatars.map((avatar, index) => (
                      <Avatar key={index} className="h-6 w-6 border-2 border-white">
                        <img src={avatar || "/placeholder.svg"} alt="" className="object-cover" />
                      </Avatar>
                    ))}
                  </div>
                ) : (
                  <Avatar className="h-6 w-6 bg-blue-600 text-white">
                    <span>A</span>
                  </Avatar>
                )}
                <span className="text-sm text-gray-600">{lead.organization.name}</span>
              </div>
            )}
          </div>

          <div className="mt-2 text-sm">{lead.description}</div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center text-xs text-gray-500">
                {lead.timeLabel && <span className="text-blue-500 mr-1">{lead.timeLabel}</span>}
                <Clock size={14} className="mr-1" />
                {lead.timePosted}
              </div>

              {lead.source && (
                <div
                  className={`flex items-center text-xs ${lead.source === "ReceptoNet" ? "text-orange-500" : "text-green-600"}`}
                >
                  {lead.source === "ReceptoNet" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  )}
                  {lead.source}
                </div>
              )}
            </div>

            {lead.assignable && (
              <div className="flex gap-2">
                <Button variant="outline" className="h-8 px-4 rounded-full">
                  Assign
                </Button>
                <Button variant="outline" className="h-8 px-4 rounded-full">
                  View Details
                </Button>
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center justify-between">
            <Button
              variant={lead.hasUnlocked ? "default" : "outline"}
              className={`h-8 rounded-full flex items-center gap-1 ${lead.hasUnlocked ? "bg-blue-600 text-white" : ""}`}
            >
              <Mail size={16} />
              <span>Unlock</span>
              <div className="flex items-center ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span className="ml-0.5">{lead.coins}</span>
              </div>
            </Button>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={`rounded-full px-2 py-0.5 ${lead.score >= 90 ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"}`}
              >
                {lead.score}
              </Badge>

              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleReaction(lead.id, "like")}>
                  <ThumbsUp size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => toggleReaction(lead.id, "dislike")}
                >
                  <ThumbsDown size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
