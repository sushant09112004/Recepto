"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  Mail,
  MapPin,
  ThumbsUp,
  ThumbsDown,
  Clock,
  MessageSquareLock,
  Link,
} from "lucide-react";
import profile from "@/assets/profile.jpg";
import img from "@/assets/DataTableImage.svg";
import { ComboboxDemo } from "@/components/ui/combobox";
import useUser from "@/hooks/useUser";

const leadsData = [
  {
    id: 1,
    name: "Sushant Jadhav",
    location: "Pune, India",
    avatar: profile.src,
    profileImages: [profile.src, profile.src],
    message:
      "We're seeking an enthusiastic developer skilled in React/Next.js. Remote work and startup vibes!",
    time: "1 hour ago",
    group: "Product",
    score: 99,
    source: "organization",
    unlockCost: 3,
    features: {
      viewEmail: false,
      assignTo: true,
      confidential: false,
    },
  },
  {
    id: 2,
    name: "John Done",
    location: "Mumbai, India",
    avatar: profile.src,
    profileImages: [profile.src, profile.src, profile.src],
    message:
      "Looking for a BD executive to help us reach new clients. Fast-paced, growth startup.",
    time: "2 hours ago",
    group: "Hiring",
    score: 88,
    source: "ReceptoNet",
    unlockCost: 2,
    features: {
      viewEmail: true,
      assignTo: false,
      confidential: true,
    },
  },
  {
    id: 3,
    name: "Ravi Kumar",
    location: "Bangalore, India",
    avatar: profile.src,
    profileImages: [profile.src, profile.src, profile.src],
    message:
      "We're looking for a product manager to drive innovation and lead teams in a fast-growing startup environment.",
    time: "3 hours ago",
    group: "Product Management",
    score: 95,
    source: "TechCorp",
    unlockCost: 4,
    features: {
      viewEmail: true,
      assignTo: true,
      confidential: false,
    },
  },
  {
    id: 4,
    name: "Neha Sharma",
    location: "Delhi, India",
    avatar: profile.src,
    profileImages: [profile.src, profile.src],
    message:
      "Seeking a talented UI/UX designer to help us create intuitive and engaging digital experiences for our clients.",
    time: "4 hours ago",
    group: "Design",
    score: 92,
    source: "DesignHub",
    unlockCost: 3,
    features: {
      viewEmail: true,
      assignTo: false,
      confidential: false,
    },
  },
  {
    id: 5,
    name: "Amit Singh",
    location: "Chennai, India",
    avatar: profile.src,
    profileImages: [profile.src, profile.src, profile.src],
    message:
      "Looking for a backend developer skilled in Node.js and AWS to help build scalable systems for our platform.",
    time: "5 hours ago",
    group: "Engineering",
    score: 90,
    source: "InnoTech",
    unlockCost: 3,
    features: {
      viewEmail: false,
      assignTo: true,
      confidential: true,
    },
  }
  
];

export default function LeadsPostCard() {
  const { user } = useUser(); // assuming { role: "admin" | "user" }
  const [unlockedIds, setUnlockedIds] = useState([]);
  const [viewedEmailIds, setViewedEmailIds] = useState([]);
  const [likedMap, setLikedMap] = useState({});
  const [dislikedMap, setDislikedMap] = useState({});

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

  const handleUnlock = (id) => {
    if (!unlockedIds.includes(id)) {
      setUnlockedIds((prev) => [...prev, id]);
    }
  };

  const handleViewEmail = (id) => {
    if (!viewedEmailIds.includes(id)) {
      setViewedEmailIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="space-y-4 p-4">
      {leadsData.map((lead) => {
        const isUnlocked = unlockedIds.includes(lead.id);
        const viewedEmail = viewedEmailIds.includes(lead.id);
        const confidential = lead.features.confidential;

        const displayName =
          isUser && confidential && !isUnlocked && !viewedEmail ? (
            <span className="blur-sm select-none">Confidential</span>
          ) : (
            lead.name
          );

        return (
          <Card key={lead.id} className="rounded-xl border shadow-sm">
            <CardContent className="p-4 flex flex-col gap-3">
              {/* Top Section */}
              <div className="flex justify-between items-start">
                {/* Left */}
                <div className="flex items-start gap-3">
                  <Image src={img} alt="icon" width={40} height={40} />
                  <div>
                    <div className="font-medium">{displayName}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {lead.location}
                    </div>
                  </div>
                  <div className="flex items-center -space-x-2 ml-2">
                    {lead.profileImages.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt="profile"
                        width={24}
                        height={24}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                  {/* Admin Controls */}
                  {isAdmin && !isUnlocked ? (
                    <Button
                      onClick={() => handleUnlock(lead.id)}
                      className="w-[250px] bg-blue-600 text-white rounded-3xl hover:bg-blue-700 gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Unlock (Cost: {lead.unlockCost})
                    </Button>
                  ) : null}

                  {(isAdmin && isUnlocked) || (isUser && viewedEmail) ? (
                    <>
                      {lead.features.assignTo && <ComboboxDemo />}
                      <Button
                        variant="outline"
                        className="border-yellow-500 text-yellow-700 rounded-3xl"
                      >
                        View Details
                      </Button>
                      <ComboboxDemo />
                    </>
                  ) : null}

                  {/* User Controls - viewEmail */}
                  {isUser && lead.features.viewEmail && !viewedEmail && (
                    <Button
                      variant="outline"
                      onClick={() => handleViewEmail(lead.id)}
                      className="border-blue-500 bg-blue-600 text-white rounded-3xl hover:bg-blue-700"
                    >
                      <Mail className="w-4 h-4" /> View Email
                    </Button>
                  )}

                  {/* Score */}
                  <div
                    className={`${
                      lead.score >= 90 ? "bg-green-500" : "bg-blue-500"
                    } text-white text-sm px-2 py-1 rounded-sm`}
                  >
                    {lead.score}
                  </div>

                  {/* Icons */}
                  <div className="flex items-center gap-2">
                    <div
                      onClick={() => {
                        setLikedMap((prev) => ({ ...prev, [lead.id]: true }));
                        setTimeout(() => {
                          setLikedMap((prev) => ({
                            ...prev,
                            [lead.id]: false,
                          }));
                        }, 300);
                      }}
                      className={`p-1 rounded-full transition-all duration-300 ${
                        likedMap[lead.id]
                          ? "bg-blue-200 scale-110"
                          : "hover:bg-blue-100"
                      }`}
                    >
                      <ThumbsUp className="w-5 h-5 cursor-pointer text-blue-600" />
                    </div>

                    <div
                      onClick={() => {
                        setDislikedMap((prev) => ({
                          ...prev,
                          [lead.id]: true,
                        }));
                        setTimeout(() => {
                          setDislikedMap((prev) => ({
                            ...prev,
                            [lead.id]: false,
                          }));
                        }, 300);
                      }}
                      className={`p-1 rounded-full transition-all duration-300 ${
                        dislikedMap[lead.id]
                          ? "bg-blue-200 scale-110"
                          : "hover:bg-blue-100"
                      }`}
                    >
                      <ThumbsDown className="w-5 h-5 cursor-pointer text-blue-600" />
                    </div>
                  </div>

                  {/* Confidential actions */}
                  {isUser && confidential && (
                    <div className="flex gap-2">
                      <MessageSquareLock className="w-5 h-5 text-blue-600" />
                      <Link className="w-5 h-5 text-blue-600" />
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <p className="text-sm">{lead.message}</p>

              {/* Footer */}
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span
                  className={`px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    lead.source === "ReceptoNet"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Clock className="h-3" /> {lead.time}
                </span>

                <span
                  className={`px-2 py-0.5 rounded-full ${
                    lead.source === "ReceptoNet"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  🔗 {lead.source}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
