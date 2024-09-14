import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <Link href="/">Home</Link>
      <a
        href="https://github.com/yunqilee/interview-questions"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
      <a
        href="https://github.com/sponsors/yunqilee"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Sponsor
      </a>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
  },
};

export default Navbar;
