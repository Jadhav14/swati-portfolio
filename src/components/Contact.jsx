import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_ube5fks",          // Your Service ID
        "template_dbcjhgj",         // <-- Replace with your exact Template ID
        {
          from_name: form.from_name,
          from_email: form.from_email,
          subject: form.subject,
          message: form.message,
        },
        "rUpfHwUQygWNfujmY"          // Your Public Key
      );

      console.log("Email sent:", result);

      alert("✅ Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        `❌ Failed to send message.
Error: ${error?.text || error?.message || "Unknown Error"}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#050816]"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Contact <span className="text-violet-500">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Have a project or opportunity? Let's connect.
        </p>

        <form
          onSubmit={sendEmail}
          className="mt-14 bg-white/5 p-10 rounded-3xl border border-white/10"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={form.from_name}
              onChange={handleChange}
              required
              className="bg-[#111827] p-4 rounded-xl outline-none text-white"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={form.from_email}
              onChange={handleChange}
              required
              className="bg-[#111827] p-4 rounded-xl outline-none text-white"
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="bg-[#111827] p-4 rounded-xl outline-none mt-6 w-full text-white"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-[#111827] p-4 rounded-xl outline-none mt-6 w-full resize-none text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-8 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}