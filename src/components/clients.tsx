"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    text: "NxtWare đã giúp chúng tôi xây dựng một nền tảng thương mại điện tử hiện đại, giúp tăng doanh thu trực tuyến của chúng tôi lên 150% chỉ trong 6 tháng.",
    author: "Nguyễn Văn A",
    position: "CEO, TechRetail",
    image: "/vercel.svg",
  },
  {
    text: "Dịch vụ phát triển ứng dụng di động của NxtWare đã giúp chúng tôi tạo ra ứng dụng được người dùng đánh giá 4.8/5 trên cả App Store và Google Play.",
    author: "Trần Thị B",
    position: "Product Manager, HealthPlus",
    image: "/next.svg",
  },
  {
    text: "Giải pháp quản lý doanh nghiệp của NxtWare đã giúp chúng tôi tối ưu hóa quy trình làm việc, tiết kiệm 30% chi phí vận hành và tăng năng suất nhân viên.",
    author: "Lê Văn C",
    position: "COO, Manufacturing Pro",
    image: "/vercel.svg",
  },
  {
    text: "NxtWare không chỉ là nhà cung cấp dịch vụ mà còn là đối tác chiến lược, luôn lắng nghe và đưa ra giải pháp phù hợp nhất cho doanh nghiệp chúng tôi.",
    author: "Phạm Thị D",
    position: "CTO, FinTech Solutions",
    image: "/next.svg",
  },
];

const clients = [
  "/vercel.svg",
  "/next.svg",
  "/vercel.svg",
  "/next.svg",
  "/vercel.svg",
  "/next.svg",
  "/vercel.svg",
  "/next.svg",
];

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="clients" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Khách hàng tin tưởng
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Chúng tôi đã và đang hợp tác với các doanh nghiệp từ startup đến tập đoàn lớn để phát triển các giải pháp phần mềm hiện đại và hiệu quả.
          </p>
        </div>

        {/* Client logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center items-center py-6 px-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-8 md:h-12 dark:invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Đánh giá từ khách hàng
        </h3>
        
        <div ref={containerRef} className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover dark:invert"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
            Xem thêm đánh giá
          </button>
        </motion.div>
      </div>
    </section>
  );
}
