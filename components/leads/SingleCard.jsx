"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { Button } from "../ui/button";
// Data array at the top
const jobData = {
  profileImage: profile,
  name: "Jennifer Markus",
  location: "Mumbai, India",
  organization: "Org's Network",
  organizationMembers: [profile, profile, profile],
  description:
    "A team from *company name mentioned* is seeking a highly motivated Business Development Executive to outreach and secure boo...",
  timePosted: "3 hours ago",
  groupName: "Group name",
  score: 74,
};

export default function JobCard() {
  return (
    <div className="flex w-[90%] border rounded-lg p-4 justify-center items-center bg-white shadow-sm">
      <div className="flex items-start gap-3">
        {/* Profile section */}
        <div className="flex-shrink-0">
          <Image
            src={jobData.profileImage || "/placeholder.svg"}
            alt={jobData.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Content section */}
        <div className="flex-grow">
          {/* Header with name, location, organization */}
          <div className="flex flex-wrap items-center justify-between mb-2">
            <div className=" sm:items-center gap-1 sm:gap-3">
              <h3 className="font-semibold text-lg">{jobData.name}</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C12 22 20 18 20 11.5C20 6.25 16.42 2 12 2C7.58 2 4 6.25 4 11.5C4 18 12 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {jobData.location}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-sm mr-1">{jobData.organization}</span>
                <div className="flex -space-x-2">
                  {jobData.organizationMembers.map((member, index) => (
                    <Image
                      key={index}
                      src={member || "/placeholder.svg"}
                      alt="Member"
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job description */}
          <p className="text-gray-700 mb-3">{jobData.description}</p>

          {/* Footer with time, group */}
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7V12L15 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {jobData.timePosted}
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {jobData.groupName}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <Button className="border border-amber-600 text-amber-600 px-6 py-2 rounded-full font-medium hover:bg-amber-50 transition-colors">
              Assign
            </Button>
            <Button className="border border-amber-600 text-amber-600 px-6 py-2 rounded-full font-medium hover:bg-amber-50 transition-colors">
              View Details
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-green-500 text-white font-medium rounded-md w-10 h-10 flex items-center justify-center">
              {jobData.score}
            </div>
            <div className="flex gap-1">
              <button className="text-gray-500 hover:text-blue-500 transition-colors">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-red-500 transition-colors">
                <ThumbsDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
