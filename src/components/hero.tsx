"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 dark:to-gray-900/0 pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="flex items-center">
              <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30 rounded-full inline-block">
                #1 Công ty công nghệ tại Việt Nam
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Giải pháp công nghệ{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                đột phá
              </span>{" "}
              cho doanh nghiệp của bạn
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              NxtWare cung cấp các giải pháp phần mềm và dịch vụ công nghệ tiên tiến, giúp doanh nghiệp tối ưu hóa hoạt động và đạt được thành công trong kỷ nguyên số.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-4 mt-2 md:mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full xs:w-auto"
              >
                <Link
                  href="#contact"
                  className="w-full xs:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  Liên hệ ngay
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full xs:w-auto"
              >
                <Link
                  href="#solutions"
                  className="w-full xs:w-auto px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center"
                >
                  Xem giải pháp
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-4 md:mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-3">
                Được tin tưởng bởi các công ty hàng đầu:
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                <Image src="/vercel.svg" alt="Company Logo" className="h-4 sm:h-5 md:h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                <Image src="/next.svg" alt="Company Logo" className="h-4 sm:h-5 md:h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                <Image src="/vercel.svg" alt="Company Logo" className="h-4 sm:h-5 md:h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                <Image src="/next.svg" alt="Company Logo" className="h-4 sm:h-5 md:h-6 dark:invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-6 lg:mt-0 order-first lg:order-last"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
              {/* Replace with your hero image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="opacity-80">NxtWare</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-400 dark:bg-yellow-500 opacity-70 blur-xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-blue-400 dark:bg-blue-500 opacity-70 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
