"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "7+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Nhân viên giỏi" },
  { value: "200+", label: "Dự án hoàn thành" },
  { value: "95%", label: "Khách hàng hài lòng" },
];

const teamMembers = [
  {
    name: "Nguyễn Văn A",
    position: "CEO & Founder",
    image: "/user-placeholder.png",
  },
  {
    name: "Trần Thị B",
    position: "CTO",
    image: "/user-placeholder.png",
  },
  {
    name: "Lê Văn C",
    position: "Lead Developer",
    image: "/user-placeholder.png",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Về NxtWare
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Chúng tôi là công ty công nghệ hàng đầu Việt Nam với sứ mệnh mang công nghệ tiên tiến đến mọi doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Câu chuyện của chúng tôi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              NxtWare được thành lập vào năm 2018 bởi một nhóm các nhà phát triển phần mềm với niềm đam mê tạo ra các sản phẩm công nghệ chất lượng cao. Từ một startup nhỏ, chúng tôi đã phát triển thành một công ty công nghệ với hơn 50 nhân viên tài năng.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Với sứ mệnh giúp các doanh nghiệp Việt Nam chuyển đổi số thành công, chúng tôi không ngừng nghiên cứu và ứng dụng các công nghệ tiên tiến để phát triển các giải pháp phần mềm hiện đại, đáp ứng nhu cầu ngày càng cao của thị trường.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Triết lý của chúng tôi là đặt khách hàng làm trọng tâm, hiểu rõ nhu cầu của khách hàng và cung cấp giải pháp hiệu quả, giúp doanh nghiệp nâng cao năng suất và tạo ra giá trị.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              {/* Placeholder for an about image */}
              <div className="aspect-[4/3] bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <span className="text-4xl font-bold opacity-30">NxtWare Team</span>
              </div>
            </div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Đội ngũ lãnh đạo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-[3/2] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* Replace with actual team member images */}
                  <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">{member.name}</span>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.position}
                  </p>
                  <div className="flex justify-center mt-3 space-x-3">
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              href="/team"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              Xem toàn bộ đội ngũ
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
