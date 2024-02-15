import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4 pt-8">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-accent-blue p-3"
      >
        <FaFacebook size={20} color="#7D6DD8" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-accent-blue p-3"
      >
        <FaTwitter size={20} color="#7D6DD8" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-accent-blue p-3"
      >
        <FaInstagram size={20} color="#7D6DD8" />
      </a>
    </div>
  );
};

export default SocialMedia;
