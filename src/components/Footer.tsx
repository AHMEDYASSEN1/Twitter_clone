import React from "react";

const Footer = () => {
  return (
    <div>
      <ul className="flex gap-x-4 gap-y-1 my-4 text-[#e8ecef7c] text-[12px] flex-wrap">
        <li className="cursor-pointer hover:underline">Terms of Service</li>
        <li className="cursor-pointer hover:underline">Privacy Policy</li>
        <li className="cursor-pointer hover:underline">Cookie Policy</li>
        <li className="cursor-pointer hover:underline">Accessibility</li>
        <li className="cursor-pointer hover:underline">Ads info</li>
        <li className="cursor-pointer hover:underline">More...</li>
        <li className="cursor-pointer hover:underline">2024 X Crop.</li>
      </ul>
    </div>
  );
};

export default Footer;
