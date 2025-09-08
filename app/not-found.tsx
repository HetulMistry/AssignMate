"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-[#2196F3]/10">
      <motion.header
        className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <Image
                src="/LogoText.png"
                alt="AssignMate Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
          </motion.div>

          <motion.div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="bg-[#2196F3] text-white px-4 py-2 rounded-full hover:shadow-xl transition-shadow inline-flex items-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </motion.div>
            <ThemeToggleButton variant="circle" start="top-right" />
          </motion.div>
        </div>
      </motion.header>

      <section className="pt-32 pb-20 px-6 flex items-center justify-center min-h-screen">
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-[#2196F3] to-[#FFB74D] rounded-full flex items-center justify-center">
                <AlertCircle className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#2196F3] to-[#FFB74D] bg-clip-text text-transparent">
                404
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Oops! The page you&apos;re looking for seems to have wandered off.
              Don&apos;t worry though – let&apos;s get you back on track with
              your academic journey.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="bg-gradient-to-r from-[#2196F3] to-[#FFB74D] text-white text-lg px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center"
                >
                  <Home className="w-5 h-5 mr-2 shadow-xl" />
                  Back to Home
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => window.history.back()}
                  className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-lg px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors inline-flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#2196F3]/10 dark:bg-[#2196F3]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Home className="w-6 h-6 text-[#2196F3]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Homepage
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Return to our main page and explore all features
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FFB74D]/10 dark:bg-[#FFB74D]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Search className="w-6 h-6 text-[#FFB74D]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Search
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Find what you&apos;re looking for with our search
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FFEB3B]/10 dark:bg-[#FFEB3B]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <AlertCircle className="w-6 h-6 text-[#FFEB3B]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Support
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Need help? Contact our support team
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/LogoText.png"
                alt="AssignMate Logo"
                width={128}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="flex items-center space-x-6 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 AssignMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
