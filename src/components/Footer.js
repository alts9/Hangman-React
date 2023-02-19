import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      {year} - <a href={"https://github.com/alts9"}>Alts9</a>
    </div>
  );
}

export default Footer;
