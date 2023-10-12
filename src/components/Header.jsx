import React from "react";

function Header() {
  return (
    <header>
      <div>
        <img src="/logos/logo.png" alt="Logo" />
      </div>
      <div>
        <nav>
          <ul className="flex gap-5">
            <li>All</li>
            <li>All</li>
            <li>All</li>
            <li>All</li>
            <li>All</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
