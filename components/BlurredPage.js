import React, { useState, useEffect } from "react";

const BlurredPage = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-white blur"
        style={{ backdropFilter: `blur(${scrollY}px)` }}
      />
      <div
        className="fixed bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-transparent to-white blur"
        style={{ backdropFilter: `blur(${scrollY}px)` }}
      />

      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BlurredPage;
