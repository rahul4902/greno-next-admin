"use client"

import { ChevronRight, Edit2, MapPin, Users, FileText, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AddressPage() {
  return (
    <div className="container mx-auto p-4 max-w-2xl space-y-6">
      {/* User Header */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-full">
            <Users className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <h2 className="font-medium">Guest</h2>
            <p className="text-sm text-gray-500">+91 9716164902</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Edit2 className="w-5 h-5" />
          <span className="sr-only">Edit profile</span>
        </button>
      </div>

      {/* VIP Banner */}
      <Link
        href="/vip"
        className="block p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-blue-600 hover:from-blue-100 hover:to-blue-150 transition-colors"
      >
        Become a VIP →
      </Link>

      {/* My Details Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">My Details</h2>
        </div>
        <nav className="divide-y">
          <Link href="/family" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gray-600" />
              <span>Family Members</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
          <Link
            href="/prescription"
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-600" />
              <span>Prescription</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
          <Link
            href="/address"
            className="flex items-center justify-between p-4 hover:bg-gray-50 bg-blue-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>Address book</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
          <Link href="/bookings" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-gray-600" />
              <span>Bookings & Reports</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        </nav>
      </div>

      {/* Saved Addresses Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Saved Addresses</h2>
        </div>
        <div className="p-4 space-y-4">
          {/* Address Cards */}
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">home</h3>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Edit2 className="w-4 h-4" />
                  <span className="sr-only">Edit address</span>
                </button>
              </div>
              <p className="text-sm text-gray-500">d113, noida, tata,</p>
              <p className="text-sm text-gray-500">
                113, D Block, Sector 63, Noida, Gautam Buddh Nagar, Meerut Division, UP, 201307
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">home</h3>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Edit2 className="w-4 h-4" />
                  <span className="sr-only">Edit address</span>
                </button>
              </div>
              <p className="text-sm text-gray-500">111, 111, 111,</p>
              <p className="text-sm text-gray-500">Noida, Gautam Buddh Nagar, UP</p>
            </div>
          </div>

          {/* Add Address Button */}
          <button
            className="w-full py-2 px-4 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => {}}
          >
            + Add Address
          </button>
        </div>
      </div>
    </div>
  )
}

