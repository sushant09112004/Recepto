"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, ThumbsDown, Clock } from "lucide-react";
import profile from "@/assets/profile.jpg";
import useUser from "@/hooks/useUser";
import React from "react";
const posts = [
  {
    id: 1,
    name: "Jennifer Markus",
    location: "Mumbai, India",
    avatar: profile,
    networkLabel: "Org’s Network",
    profileImages: [profile, profile, profile],
    message:
      "A team from *company name mentioned* is seeking a highly motivated Business Development Executive to outreach and secure new clients. The ideal candidate should have a proven track record in sales and business development, with excellent communication skills.",
    time: "3 hours ago",
    group: "Group name",
    score: 74,
  },
  // Add more if needed
];

export default function PostCard() {
  const { user } = useUser();

  // Safe access to avoid crashing if user is undefined initially
  const userName = user?.name ?? "Guest";

  return (
    <div className="space-y-4 p-4">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="rounded-xl border border-muted shadow-sm"
        >
          <CardContent className="p-4 flex flex-col gap-3">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.name} />
                </Avatar>
                <div>
                  <div className="font-medium">{post.name}</div>
                  <div className="text-sm text-muted-foreground">
                    📍 {post.location}
                  </div>
                </div>
                {/* Network */}
                <div className="flex items-center -space-x-2 ml-2">
                  {post.profileImages.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt="profile"
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full ml-2">
                    {post.networkLabel}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              {/* <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Assign
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div> */}
              <div className="flex justify-between items-center">
                {/* <div className="flex gap-2 text-sm text-muted-foreground"></div> */}
                <div className="flex items-center gap-3">
                  {user?.role === "admin" ? (
                    <>
                      <Button
                        variant="outline"
                        size="default"
                        className="border-yellow-500 text-yellow-700 rounded-3xl"
                      >
                        Assign
                      </Button>
                      <Button
                        variant="outline"
                        size="default"
                        className="border-yellow-500 text-yellow-700 rounded-3xl"
                      >
                        View Details
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outline"
                      size="default"
                      className="border-blue-500 text-blue-700 rounded-3xl"
                    >
                      View Post
                    </Button>
                  )}

                  <div className="bg-green-500 text-white text-sm px-2 py-1 rounded-sm">
                    {post.score} 
                  </div>
                  <ThumbsUp className="w-5 h-5 cursor-pointer text-muted-foreground" />
                  <ThumbsDown className="w-5 h-5 cursor-pointer text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Message */}
            <p className="text-sm">{post.message}</p>
            {user?.role}
            {/* Footer */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span className="bg-muted px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="h-3" /> {post.time}
                </span>
                <span className="bg-muted px-2 py-0.5 rounded-full text-green-600">
                  🟢 {post.group}
                </span>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                  {post.score}
                </div>
                <ThumbsUp className="w-4 h-4 cursor-pointer text-muted-foreground" />
                <ThumbsDown className="w-4 h-4 cursor-pointer text-muted-foreground" />
              </div> */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
