import React, { useState, useEffect } from 'react';

const AboutLoadingAnimation = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Loading Screen */}
      <div className={`fixed inset-0 bg-gray-900 flex justify-center items-center z-50 transition-opacity duration-500 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative w-48 h-48 md:w-72 md:h-72 flex justify-center items-center">
          {/* Text Animation */}
          <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 flex gap-1">
            {['A', 'b', 'o', 'u', 't', ' ', 'D', 'e', 'v', 'E', 's', 's', 'e', 'n', 'c', 'e'].map((letter, index) => (
              <span
                key={index}
                className="text-amber-400 text-xl md:text-2xl font-bold animate-bounce"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className={`transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </main>
    </div>
  );
};

export default AboutLoadingAnimation;