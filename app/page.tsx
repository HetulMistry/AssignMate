"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import {
  Brain,
  CheckCircle,
  FileText,
  Sparkles,
  Users,
  Zap,
  Star,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: Brain,
    title: "Multi-AI Assistance",
    description:
      "Get answers and insights from multiple AI models with just one prompt, helping you approach assignments from different perspectives.",
  },
  {
    icon: FileText,
    title: "Easy Document Analysis",
    description:
      "Upload PDFs, Word docs, and more to get quick breakdowns and insights from complex materials, all in one place.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Receive real-time feedback on your work, with detailed suggestions to improve and refine your assignments instantly.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Share your work, ideas, and insights with classmates to enhance your learning experience in a collaborative space.",
  },
  {
    icon: Star,
    title: "Achieve Excellence",
    description:
      "Reach your academic goals with confidence, knowing your work is on track and meeting the highest standards.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Ensure your assignments meet academic standards with built-in checks like plagiarism detection and formatting reviews.",
  },
];

export default function LandingPage() {
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
            <Image
              src="/LogoText.png"
              alt="AssignMate Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </motion.div>

          <motion.div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="bg-[#2196F3] text-white px-4 py-2 rounded-full hover:shadow-xl transition-shadow inline-flex items-center"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
          <ThemeToggleButton variant="circle" start="top-right" />
        </div>
      </motion.header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center bg-[#2196F3]/10 dark:bg-[#2196F3]/20 text-[#2196F3] dark:text-[#2196F3] px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Your AI-Powered Assignment Assistant
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Transform Your
              <span className="bg-gradient-to-r from-[#2196F3] to-[#FFB74D] bg-clip-text text-transparent block">
                Academic Journey
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              AssignMate helps you manage your assignments with instant
              feedback, deadline reminders, and all the tools you need to stay
              on track and complete your work with confidence.
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
                  className="btn-primary text-lg px-8 py-4 flex items-center border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300  rounded-full  font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Start For Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center justify-center space-x-8 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#FFEB3B] mr-2" />
                No setup required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#FFEB3B] mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#FFEB3B] mr-2" />
                No login required
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </section>

      <section id="features" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-[#2196F3] to-[#FFB74D] bg-clip-text text-transparent">
                Academic Success
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Unlock your full potential with AssignMate—your all-in-one
              solution for smarter learning and better results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#2196F3] rounded-xl flex items-center justify-center mb-6">
                  {/* <div className="w-14 h-14 bg-gradient-to-r from-[#2196F3] to-[#FFB74D] rounded-xl flex items-center justify-center mb-6"> */}
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-[#2196F3] to-[#FFB74D]">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              Ready to Transform Your Studies?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Join the growing community of students using AssignMate to improve
              their assignments, get instant feedback, and stay on top of
              deadlines.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="bg-[#2196F3] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:bg-gradient-to-r from-[#2196F3] to-[#FFB74D] transition-all duration-300 inline-flex items-center"
              >
                Start For Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
