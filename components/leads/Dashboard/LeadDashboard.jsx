"use client"
import { Card } from "@/components/ui/card"
import { Info, ThumbsUp, Users } from "lucide-react"

export default function LeadsDashboard() {
  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ReceptoNet Leads */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 col-span-1 lg:col-span-2 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V12C4 15.31 7.58 20 12 22C16.42 20 20 15.31 20 12V6L12 2Z" fill="#2563EB" />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center">
                <h2 className="text-lg font-medium">ReceptoNet Leads</h2>
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">404</h1>
              <p className="text-sm text-gray-500">Total</p>
            </div>

            <div className="mt-4 mb-6">
              <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "31%" }}></div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  <span>Unlocked</span>
                  <span className="ml-1 font-medium">179 users</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-100 rounded-full mr-2"></div>
                  <span>Yet to Unlock</span>
                  <span className="ml-1 font-medium">394 users</span>
                </div>
              </div>
            </div>

            <div className="relative h-48">
              <BlueChart />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
              </div>
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-2">
                <span>400</span>
                <span>300</span>
                <span>200</span>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-medium">Liked Leads</h2>
              </div>
              <h1 className="text-3xl font-bold">23.4K</h1>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-lg font-medium">Assigned Leads</h2>
              </div>
              <h1 className="text-3xl font-bold">23.4K</h1>
            </Card>
          </div>
        </div>

        {/* Org Network Leads */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 col-span-1 lg:col-span-2 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#4267B2" />
                  <path
                    d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.9219C17.3438 4.9219 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.3492 10.125 9.3516V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center">
                <h2 className="text-lg font-medium">Org Network Leads</h2>
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">594</h1>
              <p className="text-sm text-gray-500">Total</p>
            </div>

            <div className="mt-4 mb-6">
              <div className="h-2 w-full bg-orange-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: "31%" }}></div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span>Contacted</span>
                  <span className="ml-1 font-medium">179 users</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-100 rounded-full mr-2"></div>
                  <span>Yet to Contact</span>
                  <span className="ml-1 font-medium">394 users</span>
                </div>
              </div>
            </div>

            <div className="relative h-48">
              <OrangeChart />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
              </div>
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-2">
                <span>400</span>
                <span>300</span>
                <span>200</span>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-medium">Liked Leads</h2>
              </div>
              <h1 className="text-3xl font-bold">23.4K</h1>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-lg font-medium">Assigned Leads</h2>
              </div>
              <h1 className="text-3xl font-bold">23.4K</h1>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Blue Chart Component with SVG
function BlueChart() {
  return (
    <div className="relative h-full w-full">
      <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
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
        <line x1="360" y1="0" x2="360" y2="200" stroke="#6366f1" strokeWidth="1" strokeDasharray="4,4" />

        {/* Data Point at May */}
        <circle cx="360" cy="40" r="5" fill="white" stroke="#6366f1" strokeWidth="2" />

        {/* Value Label */}
        <text x="360" y="25" textAnchor="middle" fontSize="12" fill="#6366f1" fontWeight="bold">
          394
        </text>
      </svg>
    </div>
  )
}

// Orange Chart Component with SVG
function OrangeChart() {
  return (
    <div className="relative h-full w-full">
      <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
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
        <line x1="360" y1="0" x2="360" y2="200" stroke="#f97316" strokeWidth="1" strokeDasharray="4,4" />

        {/* Data Point at May */}
        <circle cx="360" cy="45" r="5" fill="white" stroke="#f97316" strokeWidth="2" />

        {/* Value Label */}
        <text x="360" y="30" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="bold">
          394
        </text>
      </svg>
    </div>
  )
}
