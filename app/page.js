"use client";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-10 sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <h1 className="text-2xl font-bold text-blue-600">SharpSharp</h1>
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-4"
        >
          Work Smarter, Move SharpSharp 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 mb-6 max-w-2xl"
        >
          Manage your tasks, projects, and team faster than ever — built for
          sharp minds who don’t waste time.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 font-semibold shadow-md"
        >
          Join the Waitlist
        </motion.button>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-20 px-6 max-w-6xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Why Choose SharpSharp?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "⚡ Speed",
              desc: "Get things done faster with efficiency in mind.",
            },
            {
              title: "📊 Clarity",
              desc: "Stay on top of projects with simple dashboards.",
            },
            {
              title: "🤝 Teamwork",
              desc: "Collaborate seamlessly with your team.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          About SharpSharp
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          SharpSharp is built for people who want to move fast, stay organized,
          and collaborate effortlessly. Whether you’re running a startup, a
          creative team, or managing personal projects — SharpSharp gives you
          the clarity and speed you need to get things done. 💡
        </motion.p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mb-6"
        >
          Got questions? Want to collaborate? Drop us a message and we’ll get
          back sharp-sharp!
        </motion.p>
        <form className="grid gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold shadow-md hover:bg-blue-700"
          >
            Send Message
          </motion.button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Work SharpSharp?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-blue-600 rounded-2xl font-semibold shadow-md hover:bg-gray-100"
        >
          Get Started Free
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SharpSharp. All rights reserved.
      </footer>
    </main>
  );
}
