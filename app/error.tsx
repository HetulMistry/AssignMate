"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import {
  Home,
  RefreshCw,
  ArrowLeft,
  AlertTriangle,
  Bug,
  Wrench,
} from "lucide-react";

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

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-slate-950 dark:via-slate-900 dark:to-red-950/10">
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
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Oops!
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Something Went Wrong
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              We encountered an unexpected error while processing your request.
              Don&apos;t worry – our team has been notified and we&apos;re
              working to fix it.
            </motion.p>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === "development" && (
              <motion.div
                variants={fadeInUp}
                className="mb-8 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-left max-w-2xl mx-auto"
              >
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                  Error Details (Development Only)
                </h3>
                <p className="text-sm text-red-700 dark:text-red-300 font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </motion.div>
            )}

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={reset}
                  className="bg-gradient-to-r from-[#2196F3] to-[#FFB74D] text-white text-lg px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-lg px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors inline-flex items-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
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
                  Return to our main page and start fresh
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Wrench className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Status Page
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Check if this is a known issue we&apos;re fixing
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FFB74D]/10 dark:bg-[#FFB74D]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Bug className="w-6 h-6 text-[#FFB74D]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Report Bug
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Help us improve by reporting this issue
                </p>
              </motion.div>
            </motion.div>

            {/* Helpful Tips */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                What can you do while we fix this?
              </h3>
              <ul className="text-left space-y-3 text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                  <span>
                    Try refreshing the page or clicking &quot;Try Again&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Home className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                  <span>
                    Return to the homepage and navigate to your destination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Bug className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                  <span>Contact support if the problem persists</span>
                </li>
              </ul>
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
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="mailto:support@assignmate.com"
                className="hover:text-white transition-colors"
              >
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
