"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // New state to track form submission

  // Handle form data changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setIsSubmitted(true);  // Update submission state on success
        setFormData({          // Optionally clear form data after submission
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert('Failed to send message: ' + data.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong!');
    }
  };
  
  return (
    <div
      id="contact"
      className="py-10 px-5 text-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-lg w-full mx-auto p-8 rounded-lg shadow-lg bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          contact me
        </h2>
        <p className="text-gray-400 text-center mb-6">
          If you have any questions or just want to say hi, feel free to drop me
          a message using the form below, or email me at{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => window.open("mailto:austintran616@gmail;com")}
          >
            {" "}
            austintran616@gmail.com{" "}
          </span>
          .
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-2 w-1/2">
              <label htmlFor="firstName" className="text-lg">
                first name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="p-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-blue-500 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your first name"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <label htmlFor="lastName" className="text-lg">
                last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="p-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-blue-500 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your last name"
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-blue-500 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your email"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="subject" className="text-lg">
              subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              className="p-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-blue-500 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Subject of your message"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-lg">
              message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-blue-500 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg mt-4 transition"
          >
            Submit
          </button>
        </form>

        {isSubmitted && (
          <div className="text-green-500 mt-4 text-center">
            Thank you for your message! I will get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
