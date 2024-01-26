// Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="px-8 pb-24">
        <div className="flex flex-wrap justify-between gap-12">
          <div>
            <h2 className="mb-4 text-[32px] font-bold">SAelearning</h2>
            <div className="max-w-[317px]">
              <p className="sm:text-2xl">
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
            <h2 className="mb-4 text-2xl font-bold">Pages</h2>
            <div>
              <p className="mb-3 sm:text-2xl">About</p>
              <p className="mb-3 sm:text-2xl">Our Team</p>
              <p className="mb-3 sm:text-2xl">Categories</p>
              <p className="mb-3 sm:text-2xl">Contact</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Support</h2>
            <p className="mb-3 sm:text-2xl">Help Center</p>
            <p className="mb-3 sm:text-2xl">Partner with us</p>
            <p className="mb-3 sm:text-2xl">FAQ&apos;s</p>
            <p className="mb-3 sm:text-2xl">Privacy Policy</p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Meet Us</h2>
            <p className="mb-3 sm:text-2xl">+91-098338939</p>
            <p className="mb-3 sm:text-2xl">info@saelearning.com</p>
            <p className="mb-3 sm:text-2xl">205.street, Chennai, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
