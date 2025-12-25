"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isInView) {
      document.getElementById("name")?.focus();
    }
  }, [isInView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you! Your message has been sent.");
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      role="contentinfo"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative bg-[linear-gradient(to_right,#ffffff0A_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0A_1px,transparent_1px)] bg-[size:30px_30px] bg-dark-900"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Contact Information
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    icon: <Mail size={20} />,
                    label: "Email",
                    value: "shrivasashmita@gmail.com",
                    href: "mailto:shrivasashmita@gmail.com",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: <Phone size={20} />,
                    label: "Phone",
                    value: "+91**********",
                    href: "tel:+91**********",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <MapPin size={20} />,
                    label: "Location",
                    value: "Jabalpur, India",
                    gradient: "from-green-500 to-emerald-500",
                  },
                ].map((info, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={info.href ?? "#"}
                      target={info.href ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={info.label}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                      whileHover={{ x: info.href ? 5 : 0 }}
                    >
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} text-white`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <Github size={24} />,
                      href: "https://github.com/Ashmita2282",
                      label: "GitHub profile",
                      rotate: 5,
                    },
                    {
                      icon: <Linkedin size={24} />,
                      href: "https://www.linkedin.com/in/ashmita-shrivas-566265202/",
                      label: "LinkedIn profile",
                      rotate: -5,
                    },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                      whileHover={{ scale: 1.1, rotate: social.rotate }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
              className="glass rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="space-y-6">
                {[
                  {
                    label: "Name",
                    name: "name",
                    type: "text",
                    placeholder: "Your Name",
                  },
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "your.email@example.com",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  aria-live="polite"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send size={20} /></>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
