import React from "react";

export default function Header() {
  return (
    <div className="navbar navbar-dark bg-primary">
      <nav>
        <a className="text-body" href="/">
          Home |
        </a>
        <a className="text-body" href="/movies">
          Moies
        </a>
      </nav>
    </div>
  );
}
