"use client";
import { Card } from "@/components/ui/card";
import { Info, ThumbsUp, Users, Facebook } from "lucide-react";
import ExampleChart from "@/components/Rechart";
import ExampleChartOrange from "@/components/RechartOrange";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
export default function LeadsDashboard() {
  return (
    <div className="bg-gray-50 p-3  overflow-auto">
      <div className="max-w-7xl mx-auto space-y-3">
        {/* ReceptoNet Leads */}
        <div className="grid grid-cols-12 gap-4">
          {/* ReceptoNet Leads Card */}
          <Card className="col-span-12 lg:col-span-8 p-4 bg-white rounded-xl shadow-md h-full">
            <div className="flex flex-col lg:flex-row h-full justify-between gap-6">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-14 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                    <Image src={Logo} alt="logo" />
                  </div>
                  <h2 className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    ReceptoNet Leads <Info className="w-3 h-3 text-gray-400" />
                  </h2>
                </div>

                <div className="mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">404</h1>
                  <p className="text-xs text-gray-500">Total</p>
                </div>

                <div className="mb-3">
                  <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: "31%" }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-1"></div>
                      <span>Unlocked</span>
                      <span className="ml-1 font-medium text-gray-900">
                        179 users
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-100 rounded-full mr-1"></div>
                      <span>Yet to Unlock</span>
                      <span className="ml-1 font-medium text-gray-900">
                        394 users
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="lg:w-1/2 h-full flex items-center justify-center">
                <div className="w-full h-[150px] lg:h-full">
                  <ExampleChart />
                </div>
              </div>
            </div>
          </Card>

          {/* Liked Leads */}
          <Card className="col-span-6 lg:col-span-2 p-4 bg-white rounded-xl shadow-md flex flex-col justify-between">
            <div className=" items-center gap-2 m">
              <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center mb-3.5">
                <ThumbsUp className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-xs font-medium text-gray-600">Liked Leads</h2>
            </div>
            <h1 className="text-xl font-bold text-gray-900  mb-6">23.4K</h1>
          </Card>

          {/* Assigned Leads */}
          <Card className="col-span-6 lg:col-span-2 p-4 bg-white rounded-xl shadow-md flex flex-col justify-between">
            <div className=" items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center mb-3.5">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <h2 className="text-xs font-medium text-gray-600">
                Assigned Leads
              </h2>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-6">23.4K</h1>
          </Card>
        </div>

        {/* Org Network Leads */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <Card className="p-4 col-span-1 lg:col-span-2 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-4">
              {/* Left Section (50%) */}
              <div className="w-full lg:w-1/2">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-md bg-blue-800 flex items-center justify-center">
                    <Facebook className="text-white "/>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-sm font-medium text-gray-700">
                      Org Network Leads
                    </h2>
                    <Info className="w-3 h-3 text-gray-400 ml-1" />
                  </div>
                </div>

                {/* Total Count */}
                <div className="flex flex-col mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">594</h1>
                  <p className="text-xs text-gray-500">Total</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="h-2 w-full bg-orange-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: "31%" }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
                      <span>Contacted</span>
                      <span className="ml-1 font-medium text-gray-900">
                        179 users
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-100 rounded-full mr-1"></div>
                      <span>Yet to Contact</span>
                      <span className="ml-1 font-medium text-gray-900">
                        394 users
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section (Chart - 50% width & full height/space fill) */}
              <div className="w-full lg:w-1/2 h-full">
                <div className="w-full h-full">
                  <ExampleChartOrange />
                </div>
              </div>
            </div>
          </Card>

          {/* Smaller Cards - Consistent style */}
          <div className="flex gap-4  ">
          <Card className="col-span-6 lg:col-span-2 p-4 bg-white rounded-xl shadow-md flex flex-col justify-between w-1/2">
            <div className=" items-center gap-2 m">
              <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center mb-3.5">
                <ThumbsUp className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-xs font-medium text-gray-600">Liked Leads</h2>
            </div>
            <h1 className="text-xl font-bold text-gray-900  mb-6">23.4K</h1>
          </Card>

          {/* Assigned Leads */}
          <Card className="col-span-6 lg:col-span-2 p-4 bg-white rounded-xl shadow-md flex flex-col justify-between w-1/2">
            <div className=" items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center mb-3.5">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <h2 className="text-xs font-medium text-gray-600">
                Assigned Leads
              </h2>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-6">23.4K</h1>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blue Chart Component with SVG
function BlueChart() {
  return (
    <div className="relative h-full w-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Area Chart */}
        <path
          d="M0,150 C30,140 60,130 90,120 C120,110 150,90 180,85 C210,80 240,75 270,65 C300,55 330,45 360,40 L360,200 L0,200 Z"
          fill="url(#blueGradient)"
        />

        {/* Line */}
        <path
          d="M0,150 C30,140 60,130 90,120 C120,110 150,90 180,85 C210,80 240,75 270,65 C300,55 330,45 360,40"
          fill="none"
          stroke="#818cf8"
          strokeWidth="2"
        />

        {/* Vertical Line at May */}
        <line
          x1="360"
          y1="0"
          x2="360"
          y2="200"
          stroke="#6366f1"
          strokeWidth="1"
          strokeDasharray="4,4"
        />

        {/* Data Point at May */}
        <circle
          cx="360"
          cy="40"
          r="4"
          fill="white"
          stroke="#6366f1"
          strokeWidth="2"
        />

        {/* Value Label */}
        <text
          x="360"
          y="25"
          textAnchor="middle"
          fontSize="10"
          fill="#6366f1"
          fontWeight="bold"
        >
          394
        </text>
      </svg>
    </div>
  );
}

// Orange Chart Component with SVG
function OrangeChart() {
  return (
    <div className="relative h-full w-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Area Chart */}
        <path
          d="M0,160 C30,155 60,150 90,145 C120,140 150,130 180,120 C210,110 240,100 270,85 C300,70 330,55 360,45 L360,200 L0,200 Z"
          fill="url(#orangeGradient)"
        />

        {/* Line */}
        <path
          d="M0,160 C30,155 60,150 90,145 C120,140 150,130 180,120 C210,110 240,100 270,85 C300,70 330,55 360,45"
          fill="none"
          stroke="#fb923c"
          strokeWidth="2"
        />

        {/* Vertical Line at May */}
        <line
          x1="360"
          y1="0"
          x2="360"
          y2="200"
          stroke="#f97316"
          strokeWidth="1"
          strokeDasharray="4,4"
        />

        {/* Data Point at May */}
        <circle
          cx="360"
          cy="45"
          r="4"
          fill="white"
          stroke="#f97316"
          strokeWidth="2"
        />

        {/* Value Label */}
        <text
          x="360"
          y="30"
          textAnchor="middle"
          fontSize="10"
          fill="#f97316"
          fontWeight="bold"
        >
          394
        </text>
      </svg>
    </div>
  );
}
