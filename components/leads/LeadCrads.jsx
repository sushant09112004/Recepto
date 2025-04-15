"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  ThumbsUp,
  ThumbsDown,
  Clock,
  MapPin,
  Mail,
  MessageSquareLock,
  Link,
} from "lucide-react";
import profile from "@/assets/profile.jpg";
import useUser from "@/hooks/useUser";
import React, { useState } from "react";

const orgMembers = ["Alice", "Bob", "Charlie"];

const posts = [
  {
    id: 1,
    name: "John Done",
    location: "Mumbai, India",
    avatar: profile,
    networkLabel: "Recepto Network",
    profileImages: [profile, profile, profile],
    message:
      "Looking for a Sales Executive in Mumbai. Must have strong outreach capabilities.",
    time: "3 hours ago",
    group: "Sales Team",
    score: 74,
    source: "recepto",
    features: {
      viewEmail: true,
      assignTo: false,
      confidential: true,
    },
    unlockCost: 2,
  },
  {
    id: 2,
    name: "Jennifer Markus",
    location: "Delhi, India",
    avatar: profile,
    networkLabel: "Org’s Network",
    profileImages: [profile, profile, profile],
    message:
      "Hiring Product Manager for Delhi region. Good leadership and product sense required.",
    time: "2 hours ago",
    group: "Product",
    score: 99,
    source: "organization",
    features: {
      viewEmail: false,
      assignTo: true,
      confidential: false,
    },
    unlockCost: 3,
  },
];

function LeadCards() {
  const { user } = useUser();
  const [unlocked, setUnlocked] = useState([]);
  const [assignedTo, setAssignedTo] = useState({});

  const handleUnlock = (id) => {
    if (!unlocked.includes(id)) {
      setUnlocked([...unlocked, id]);
    }
  };

  const handleAssign = (id, person) => {
    setAssignedTo({ ...assignedTo, [id]: person });
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post) => {
        const scoreColor =
          post.score >= 90 ? "text-blue-600" : post.score >= 80 ? "text-green-600" : "text-green-500";

        return (
          <div
            key={post.id}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={post.avatar.src}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2
                    className={`text-lg font-semibold ${
                      post.features.confidential && user?.role === "user"
                        ? "blur-sm"
                        : ""
                    }`}
                  >
                    {post.name}
                  </h2>
                  <p className="text-sm text-gray-500">{post.location}</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                {post.networkLabel}
              </span>
            </div>

            <div className="my-3">
              <p className="text-gray-700">{post.message}</p>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <span>{post.time}</span>
              <span className="font-medium text-gray-700">{post.group}</span>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex -space-x-2">
                {post.profileImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt={`profile-${idx}`}
                  />
                ))}
              </div>

              <div className={`text-sm font-semibold ${scoreColor}`}>
                Score: {post.score}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 items-center">
              {!unlocked.includes(post.id) ? (
                <>
                  <button
                    className="px-4 py-1 text-sm rounded bg-purple-600 text-white hover:bg-purple-700"
                    onClick={() => handleUnlock(post.id)}
                  >
                    Unlock Contact ({post.unlockCost} credits)
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 py-1 text-sm rounded bg-gray-100">
                    View Details
                  </button>

                  <div className="relative">
                    <select
                      className="px-3 py-1 rounded border"
                      onChange={(e) => handleAssign(post.id, e.target.value)}
                      value={assignedTo[post.id] || ""}
                    >
                      <option value="">Assign</option>
                      {orgMembers.map((member) => (
                        <option key={member} value={member}>
                          {member}
                        </option>
                      ))}
                    </select>
                  </div>

                  {assignedTo[post.id] && (
                    <span className="text-sm text-green-600">
                      Assigned to: {assignedTo[post.id]}
                    </span>
                  )}
                </>
              )}

              <ThumbsUp className="w-5 h-5 text-gray-500 cursor-pointer" />
              <ThumbsDown className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeadCards;
