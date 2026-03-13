'use client'

import React, { useEffect, useState } from 'react'
import { MessageCircleIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl p-4 pr-10 relative max-w-[250px] border border-gray-100"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-800 font-medium">
              Need help planning your trip? Chat with our travel experts! 👋
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <div className="flex items-center h-14 px-4 overflow-hidden">
          <MessageCircleIcon className="w-7 h-7 shrink-0" />
          <div
            className={`font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isHovered ? 'w-28 ml-3 opacity-100' : 'w-0 ml-0 opacity-0'
            }`}
          >
            Chat with us!
          </div>
        </div>
      </a>
    </div>
  )
}