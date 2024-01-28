import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
type Props = {};

const MobileFooter = (props: Props) => {
  return (
    <div>
      <footer className="pt-0 p-8">
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
          <div className="flex flex-col">
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h2 className="mb-4 text-2xl font-bold">Pages</h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-xl">About</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">Our Team</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">Categories</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">Contact</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h2 className="mb-4 text-2xl font-bold">Support</h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-xl">Help Center</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">Partner with us</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">FAQ&apos;s</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">Privacy Policy</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h2 className="mb-4 text-2xl font-bold">Meet Us</h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-xl">+91-098338939</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">info@saelearning.com</p>
                  </AccordionContent>
                  <AccordionContent>
                    <p className="mb-3 text-xl">
                      205.street, Chennai, India
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileFooter;
