import React from "react";

const Hero = () => {
  return (
    <div className="-z-20 sticky top-0 h-screen w-full">
      <video
        autoPlay
        loop
        muted
        className="overflow-visible md-invisible bg-cover absolute -z-20  min-h-full min-w-full max-w-none"
      >
        <source src="/waves.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
