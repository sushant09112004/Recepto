import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginCard from "@/components/LoginCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl text-blue-500 font-semibold mb-6">Login Credentials</h1>
      
      {/* Login Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-6">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Login Information</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="text-lg text-gray-700">Email: john@example.com</h3>
            <p className="text-sm text-gray-500">Password: 12346</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-lg text-gray-700">Email: jane@example.com</h3>
            <p className="text-sm text-gray-500">Password: 123456</p>
          </div>
        </div>
      </div>

      {/* Login Card Component */}
      <LoginCard />
    </div>
  );
}
