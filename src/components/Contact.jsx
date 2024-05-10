import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import useCartStore from "../store/useCartStore";

export const Contact = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const { cartItems } = useCartStore();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    if (cartItems.length > 0) {
      const itemName = cartItems.map((item) => item.name).join(", ");
      setFormData((prevState) => ({
        ...prevState,
        message: `I'm interested in the following program: ${itemName}`,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        message: "",
      }));
    }
  }, [cartItems]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hsaddr",
        "template_g7y2965",
        form.current,
        "-X-BmEWgrRAtMl3US"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setShowNotification(true);
          setNotificationType("success");
          setNotificationMessage("Message has been sent");

          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowNotification(true);
          setNotificationType("error");
          setNotificationMessage("Failed to send message");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (showNotification) {
      const timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [showNotification]);

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 lg:p-2">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Contact
        </h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2 text-primary">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="w-full border border-primary rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-primary">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              className="w-full border border-primary rounded-md px-4 py-2"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-primary">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-primary rounded-md px-4 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-background px-4 py-2 rounded-md hover:bg-accent mx-auto block"
          >
            Send
          </button>
        </form>
        {showNotification && (
          <div
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-${
              notificationType === "success" ? "primary" : "accent"
            } text-background px-4 py-2 rounded`}
          >
            {notificationMessage}
          </div>
        )}
      </div>
    </section>
  );
};
