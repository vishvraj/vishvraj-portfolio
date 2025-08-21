import React, { useRef, useState } from "react";
import "./styles/Email.css";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Email = () => {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_1a8k18m",
        "template_qgec02e",
        form.current,
        "1cqHauDdgO8cSHV-B"
      );
      setSuccess(true);
      setOpen(true);
      form.current.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setErrorOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <form
        className="contact-form"
        ref={form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input type="email" name="from_email" placeholder="Your Email" required />
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" rows="4" required />
        <input
          className={`send-button ${success ? "success" : ""}`}
          type="submit"
          value={loading ? "Sending..." : success ? "Email Sent Successfully!" : "Send Email"}
          disabled={loading}
        />
      </form>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
      />
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={() => setErrorOpen(false)}
        message="Failed to send email. Please try again later."
      />
    </div>
  );
};

export default Email;
