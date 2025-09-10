"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ClockIcon } from "lucide-react"

export default function CurrentTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }
      setTime(new Intl.DateTimeFormat("en-US", options).format(now))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-card/80 backdrop-blur-lg px-4 py-2 rounded-full flex items-center space-x-2 border border-border"
    >
      <ClockIcon size={16} className="text-accent" />
      <span className="text-sm font-medium">{time}</span>
      <span className="text-xs text-muted-foreground">Trichy, India</span>
    </motion.div>
  )
}
