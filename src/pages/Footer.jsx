import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-row gap-24 px-16 py-20 items-center justify-center bg-[#1a202c] text-white">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src="Logo.svg" alt="Foodie" className="h-18 w-20" />
        <ul className="flex items-center gap-3">
          <a href="https://www.facebook.com/sherile.cheptoo.1" target="-blank">
            <li>
              <Facebook />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/sherile-cheptoo/"
            target="-blank"
          >
            <li>
              {" "}
              <Linkedin />
            </li>
          </a>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li>
            {" "}
            <a href="mailto:sherilecheptoo1@gmail.com">Careers</a>
          </li>
          <li>
            {" "}
            <a href="mailto:sherilecheptoo1@gmail.com">Help</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-4">
          <li className="flex gap-2">
            <a href="tel:+254-793-721-334" className="flex gap-2">
              <Phone /> +254-793-721-334
            </a>
          </li>
          <li className="flex gap-2">
            <a href="mailto:sherilecheptoo1@gmail.com" className="flex gap-2">
              <Mail /> sherilecheptoo1@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
