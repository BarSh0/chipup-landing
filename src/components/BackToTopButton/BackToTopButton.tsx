import React, { useState, useEffect } from 'react';

export const BackToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#99e39e] hover:bg-[#99e39e]/90 text-[#000510] rounded-full shadow-[0px_8px_24px_#09090940] hover:shadow-[0px_12px_32px_#09090960] backdrop-blur-lg transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95"
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            <path
              d="M10 15V5M5 10L10 5L15 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};
