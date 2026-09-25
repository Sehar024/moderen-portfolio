
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.errors?.[0]?.msg ||
            data.message ||
            "Something went wrong"
        );
      }

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          label="Contact"
          title="Let's build something great together."
          description="Have a project, idea or opportunity? Send me a message."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/15 text-violet-400">
              <Mail size={28} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm always interested in discussing new projects,
              creative ideas and opportunities.
            </p>

            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Email
              </p>

              <a
                href="mailto:your-email@example.com"
                className="mt-1 inline-block text-violet-400 transition hover:text-violet-300"
              >
                itxsehar67@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/Sehar024"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  text-sm font-bold
                  text-gray-400
                  transition
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-white
                "
              >
                GH
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex h-11 w-18
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  text-gray-400
                  transition
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-white
                "
              >
                Linkedin
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/[0.03]
                    px-4 py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-600
                    focus:border-violet-500/60
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/[0.03]
                    px-4 py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-600
                    focus:border-violet-500/60
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border border-white/10
                    bg-white/[0.03]
                    px-4 py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-600
                    focus:border-violet-500/60
                  "
                />
              </div>

              {/* Status */}
              {status.message && (
                <div
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}

                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-violet-600
                  px-6
                  py-3.5
                  font-medium
                  text-white
                  transition
                  hover:bg-violet-500
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <Send size={18} />}
              </button>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
