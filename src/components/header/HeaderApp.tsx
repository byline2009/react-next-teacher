import React from "react";
import Link from "next/link";
const HeaderApp = () => {
  return (
    <div className="nav">
      <Link className="nav-item" href="/">
        Home
      </Link>
      <Link className="nav-item" href="/blogs">
        Blogs
      </Link>
    </div>
  );
};

export default HeaderApp;
