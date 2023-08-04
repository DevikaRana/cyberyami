import React, { useEffect, useState } from "react";
import HeaderOverview from "./HeaderO";
import Header from "./Header";

const Changed1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>{isScrolled ? <HeaderOverview /> : <Header />}</div>;
};

export default Changed1;
