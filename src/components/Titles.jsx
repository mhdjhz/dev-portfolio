import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Titles = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Quantitative analyst",
        "Tech Enthusiast ",
        "Entrepreneur",
        "Athlete",
        "Avid Reader",
      ],
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default Titles;
