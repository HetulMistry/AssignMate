"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-[#2196F3]/10 flex items-center justify-center">
      <div className="text-center">
        {/* Main Loading Spinner */}
        <motion.div
          className="relative mx-auto mb-8"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 mx-auto mb-6 relative">
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-[#2196F3] border-r-[#FFB74D] rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner Ring */}
            <motion.div
              className="absolute inset-2 border-3 border-transparent border-b-[#FFEB3B] border-l-[#2196F3] rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-8 h-8 text-[#2196F3]" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            <span className="bg-gradient-to-r from-[#2196F3] to-[#FFB74D] bg-clip-text text-transparent">
              AssignMate
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Preparing your workspace
          </p>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-[#2196F3] to-[#FFB74D] rounded-full"
              animate={{ y: [0, -20, 0] }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#2196F3] to-[#FFB74D] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "30%", "60%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
          />
        </motion.div>

        {/* Loading Messages */}
        <motion.div
          className="mt-6 h-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p
            className="text-sm text-slate-500 dark:text-slate-400"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Setting up your AI-powered assistant...
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#2196F3] to-[#FFB74D] rounded-full opacity-20"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
