"use client"

import { useState } from "react"
import { ChevronRight, Users, PlusSquare, MapPin, Calendar, LogOut, ChevronDown } from "lucide-react"

export default function MedicalDashboard() {
  const [selectedSection, setSelectedSection] = useState("family")

  const familyMembers = [
    { name: "Test", age: 5, gender: "Male" },
    { name: "Rohan Second", age: 10, gender: "Male" },
    { name: "Rohan Three", age: 7, gender: "Male" },
    { name: "Rohan", age: 7, gender: "Male" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-80 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-6">My Details</h2>

        <nav className="space-y-2">
          <button
            onClick={() => setSelectedSection("family")}
            className={`w-full flex items-center justify-between p-4 rounded-lg text-left ${
              selectedSection === "family" ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span>Family Members</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setSelectedSection("prescription")}
            className="w-full flex items-center justify-between p-4 rounded-lg text-left hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <PlusSquare className="w-5 h-5" />
              <span>Prescription</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setSelectedSection("address")}
            className="w-full flex items-center justify-between p-4 rounded-lg text-left hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Address book</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setSelectedSection("bookings")}
            className="w-full flex items-center justify-between p-4 rounded-lg text-left hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <span>Bookings & Reports</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        </nav>

        <button className="mt-auto flex items-center gap-2 text-gray-600 hover:text-gray-900 p-4">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Family Members</h1>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            <Users className="w-5 h-5" />
            Merge
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            {familyMembers.map((member, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 border border-gray-100"
              >
                <div>
                  <span className="font-medium">{member.name}</span>
                  <span className="text-gray-500">
                    {" "}
                    | {member.age} | {member.gender}
                  </span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>

          <button className="w-full mt-6 flex items-center justify-center gap-2 p-4 rounded-lg bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
            <span className="text-lg">+</span> Add new member
          </button>
        </div>
      </div>
    </div>
  )
}

