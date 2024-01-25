// Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="p-8 pb-24">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h2 className="mb-4 text-xl font-bold">SAelearning</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Auctor suspendisse
                tempus vulputate fames.{" "}
              </p>
            </div>
            <div className="flex space-x-4 pt-8">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} color="#7D6DD8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} color="#7D6DD8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} color="#7D6DD8" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Pages</h2>
            <div>
              <p>About</p>
              <p>Our Team</p>
              <p>Categories</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Support</h2>
            <p>Help Center</p>
            <p>Partner with us</p>
            <p>FAQ&apos;s</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Meet Us</h2>
            <p>+91-098338939</p>
            <p>info@saelearning.com</p>
            <p>205.street, Chennai, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
