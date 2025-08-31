import hero from "../../assets/icons/hero.mp4";
import { useRef, useState } from "react";

const Hero = () => {
  const fgVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      fgVideoRef.current.pause();
    } else {
      fgVideoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative my-10 w-full h-[500px]">

      <div className="absolute inset-0 p-5 sm:p-8 md:p-6 lg:px-4 lg:py-2 flex justify-center flex">
        <video
          ref={fgVideoRef}
          autoPlay
          loop
          playsInline
          alt="Hero Image"
          className="w-full h-[500px] rounded-xl border-l border-t object-cover"
        >
          <source src={hero} type="video/mp4" />
        </video>
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="absolute  -bottom-1 md:bottom-2 right-12 md:right-10 bg-black bg-opacity-60 text-white rounded-full p-3 shadow-lg focus:outline-none"
          style={{ zIndex: 10 }}
        >
          {isPlaying ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="6,4 20,12 6,20" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;