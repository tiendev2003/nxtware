"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Phát triển phần mềm tùy chỉnh",
    description:
      "Chúng tôi phát triển phần mềm theo yêu cầu với kiến trúc hiện đại, đảm bảo hiệu suất cao và dễ dàng mở rộng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Phát triển ứng dụng di động",
    description:
      "Thiết kế và phát triển ứng dụng di động đa nền tảng với trải nghiệm người dùng vượt trội và hiệu suất cao.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Phát triển web hiện đại",
    description:
      "Tạo ra những trang web hiệu suất cao, đáp ứng tốt trên mọi thiết bị và được tối ưu hóa cho trải nghiệm người dùng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Bảo mật và kiểm thử",
    description:
      "Đảm bảo phần mềm của bạn được bảo vệ khỏi các mối đe dọa bằng các quy trình kiểm thử và đánh giá bảo mật toàn diện.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Tư vấn kiến trúc phần mềm",
    description:
      "Cung cấp dịch vụ tư vấn chuyên sâu về kiến trúc phần mềm, giúp bạn lựa chọn công nghệ và thiết kế hệ thống hiệu quả.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "DevOps và triển khai",
    description:
      "Thiết lập quy trình DevOps hiệu quả, tự động hóa việc triển khai và đảm bảo hệ thống của bạn luôn sẵn sàng và ổn định.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            NxtWare cung cấp dịch vụ phát triển phần mềm chuyên nghiệp, từ tư vấn đến triển khai và bảo trì.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-blue-600 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Sẵn sàng phát triển dự án của bạn?
              </h3>
              <p className="text-blue-100 mb-6">
                Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về giải pháp công nghệ phù hợp cho doanh nghiệp của bạn.
              </p>
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Liên hệ ngay
              </button>
            </div>
            <div className="bg-blue-700 h-full flex items-center justify-center p-8">
              <div className="relative w-full h-64">
                {/* Replace with an actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-800 rounded-xl">
                  <span className="text-blue-200 text-5xl font-bold opacity-30">NxtWare</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
