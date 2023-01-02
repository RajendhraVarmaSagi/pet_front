import React from "react";

function Footer({ marginTop }) {
  return (
    <div
      style={{ marginTop: marginTop }}
      className="footer-section text-center"
    >
      <div className="border-top p-tb">
        <span>&copy;2022 Pets World</span>
      </div>
    </div>
  );
}

export default Footer;
