import { useState } from "react";
import { FaEnvelope, FaInstagram, FaCalendarAlt } from "react-icons/fa";

const ContactAndBooking = () => {
  const [service, setService] = useState("");

  return (
    <div className="bg-[#0f172a] p-6 md:p-12 flex flex-col md:flex-row justify-between gap-12 text-white rounded-xl shadow-lg">
      {/* Contact Info */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-semibold">Contact Information</h2>

        <div className="flex items-start gap-4">
          <FaEnvelope className="text-sky-400 mt-1" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-400">lvlautomations@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaInstagram className="text-sky-400 mt-1" />
          <div>
            <p className="font-semibold">Instagram</p>
            <p className="text-gray-400">@lvl_aiautomations</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaCalendarAlt className="text-sky-400 mt-1" />
          <div>
            <p className="font-semibold">Schedule a Call</p>
            <p className="text-gray-400">Book a consultation via Calendly</p>
          </div>
        </div>
      </div>

      {/* Quick Booking */}
      <div className="flex-1 bg-[#101827] p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Quick Booking</h2>
        <p className="text-gray-400 mb-6">
          Select a service you're interested in and schedule a free consultation
          call.
        </p>

        <label className="block mb-2 text-sm font-medium">
          Service of Interest
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-3 rounded bg-[#1f2937] text-white focus:outline-none mb-6"
        >
          <option value="">Select a service</option>
          <option value="ai">AI Automation</option>
          <option value="crm">Custom CRM</option>
          <option value="chatbot">Chatbot</option>
          <option value="other">Other</option>
        </select>

        <button className="bg-sky-400 w-full py-3 rounded font-semibold text-black hover:bg-sky-500 transition">
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default ContactAndBooking;
