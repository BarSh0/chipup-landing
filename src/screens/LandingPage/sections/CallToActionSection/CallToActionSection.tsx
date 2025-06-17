import React from "react";
import { Separator } from "../../../../components/ui/separator";

// Data for footer links
const footerLinks = {
  links: ["Features", "Benefits", "Services", "Why Chipup", "FAQs"],
  otherPages: ["Error 404", "Terms & Conditions", "Privacy Policy"],
  socialIcons: [
    { src: "/frame-10.svg", alt: "Frame" },
    { src: "/frame-8.svg", alt: "Frame" },
    { src: "/frame-4.svg", alt: "Frame" },
  ],
};

export const CallToActionSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start relative">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-20 relative w-full">
        {/* Company info and social links */}
        <div className="flex flex-col items-start gap-6 relative max-w-[486px]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
            {/* Logo */}
            <div className="inline-flex items-center gap-2.5">
              <div className="relative w-8 h-8">
                <img
                  className="absolute w-7 h-7 top-0.5 left-0.5"
                  alt="Group"
                  src="/group-78-2.png"
                />
              </div>
              <img
                className="relative w-[93px] h-8"
                alt="Frame"
                src="/frame-12.svg"
              />
            </div>

            {/* Description */}
            <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[-0.10px] leading-[22.4px]">
              Transform your crypto business with Chipup <br />
              Framer, a template for startups and blockchain services.
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex flex-wrap items-center gap-2">
            {footerLinks.socialIcons.map((icon, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center p-[9px] bg-[#ffffff1a] rounded-full"
              >
                <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer navigation columns */}
        <div className="flex flex-wrap gap-10 md:gap-20 mt-10 md:mt-0">
          {/* Links column */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="font-['DM_Sans',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-[25.2px]">
              Links
            </h3>
            <nav className="flex flex-col items-start gap-2">
              {footerLinks.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[-0.10px] leading-[22.4px] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Other Pages column */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="font-['DM_Sans',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-[25.2px]">
              Other Pages
            </h3>
            <nav className="flex flex-col items-start gap-2">
              {footerLinks.otherPages.map((page, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[-0.10px] leading-[22.4px] hover:text-white transition-colors"
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>

          {/* Download app section */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-['DM_Sans',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-[21.6px]">
              Download app
            </h3>
            <div className="flex flex-col items-start gap-4 w-full">
              {/* Google Play button */}
              <div className="flex items-center p-[3.38px] bg-[#ffffff1a] rounded-[6.77px]">
                <div className="relative w-[126.08px] h-[37.23px]">
                  <img
                    className="absolute w-[79px] h-4 top-4 left-[38px]"
                    alt="Google play"
                    src="/google-play.svg"
                  />
                  <img
                    className="absolute w-9 h-1.5 top-1.5 left-[38px]"
                    alt="Get it on"
                    src="/get-it-on.svg"
                  />
                  <img
                    className="absolute w-[21px] h-6 top-[7px] left-[9px]"
                    alt="Google play logo"
                    src="/google-play-logo.png"
                  />
                </div>
              </div>

              {/* App Store button */}
              <div className="flex items-center p-[3.69px] bg-[#ffffff1a] rounded-[7.38px]">
                <img
                  className="w-[121.85px] h-[40.62px]"
                  alt="Mobile app store"
                  src="/mobile-app-store-badge.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section with separator */}
      <Separator className="w-full bg-[#ffffff33]" />
      <div className="flex items-center justify-center py-8 w-full">
        <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff66] text-sm tracking-[-0.08px] leading-[19.6px]">
          Copyright ©2025 Chipup. All rights reserved
        </p>
      </div>
    </footer>
  );
};