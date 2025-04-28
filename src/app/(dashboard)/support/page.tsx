"use client"
import React from 'react'
import { LifeBuoy, Mail, Phone } from 'lucide-react'

const SupportAndHelpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-sky-100 p-6 font-sans">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <LifeBuoy className="w-16 h-16 text-cyan-600 mb-4" />
        <h1 className="text-4xl font-bold text-cyan-800">Support & Help</h1>
        <p className="text-gray-600 mt-2">Need assistance? We are here to help!</p>
      </div>

      {/* Support Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto space-y-6 border">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-cyan-700">Contact Us</h2>
          <p className="text-gray-700 flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-500" /> support@educateus.com
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <Phone className="w-5 h-5 text-cyan-500" /> +254 700 123 456
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-cyan-700">FAQ</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>How do I reset my password?</li>
            <li>How can I submit assignments?</li>
            <li>Where do I find new course materials?</li>
            <li>How do I contact my instructor?</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SupportAndHelpPage
