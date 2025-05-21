"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 dark:to-gray-900/0 pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30 rounded-full">
                #1 Công ty công nghệ tại Việt Nam
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Giải pháp công nghệ{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                đột phá
              </span>{" "}
              cho doanh nghiệp của bạn
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              NxtWare cung cấp các giải pháp phần mềm và dịch vụ công nghệ tiên tiến, giúp doanh nghiệp tối ưu hóa hoạt động và đạt được thành công trong kỷ nguyên số.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  Liên hệ ngay
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#solutions"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center"
                >
                  Xem giải pháp
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Được tin tưởng bởi các công ty hàng đầu:
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <img src="/vercel.svg" alt="Company Logo" className="h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/next.svg" alt="Company Logo" className="h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/vercel.svg" alt="Company Logo" className="h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/next.svg" alt="Company Logo" className="h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              {/* Replace with your hero image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white text-6xl font-bold">
                <span className="opacity-80">NxtWare</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-yellow-400 dark:bg-yellow-500 opacity-70 blur-xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-blue-400 dark:bg-blue-500 opacity-70 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
