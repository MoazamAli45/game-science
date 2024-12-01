"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { usePathname } from "next/navigation";

interface AudioPlayerProps {
  bgColor?: string;
}

export default function AudioPlayer({ bgColor = "#FB4C62" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pathName = usePathname();

  const isHomePage = pathName === "/" || pathName === "/tokenomics2";

  const tracks = [
    "/music/track1.mp3",
    "/music/track2.mp3",
    "/music/track3.mp3",
  ];

  useEffect(() => {
    const audio = new Audio(tracks[currentTrackIndex]);
    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener("ended", () => {
      handleNext();
    });

    return () => {
      audio.pause();
      audio.remove();
    };
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div className={`flex items-center justify-center  `}>
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrevious}
          className="px-3 py-2 rounded-full flex items-center justify-center bg-black-1 hover:bg-black-1/90  transition-colors"
        >
          <SkipBack className="w-5 h-5 text-white-1" />
        </button>

        <button
          onClick={togglePlay}
          className="relative p-4 rounded-full  transition-colors group outline-none "
        >
          {/* Circular Progress */}
          <svg
            className="absolute inset-0 -rotate-90 text-[#C9C9C9] "
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
          >
            <circle
              className={`${!isHomePage ? "text-[#C9C9C9]" : "text-white-1"} `}
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="48"
              cx="50"
              cy="50"
            />
            <circle
              className={` transition-all duration-200`}
              style={{
                color: bgColor,
              }}
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="48"
              cx="50"
              cy="50"
              strokeDasharray={`${progress * 3.02} 302`}
            />
          </svg>

          <span className="px-3 py-2 rounded-full flex items-center justify-center bg-black-1 hover:bg-black-1/90  transition-colors">
            {isPlaying ? (
              <Pause className="relative w-5 h-5 text-white-1" />
            ) : (
              <Play className="relative w-5 h-5 text-white-1" />
            )}
          </span>
        </button>

        <button
          onClick={handleNext}
          className="px-3 py-2 rounded-full flex items-center justify-center bg-black-1 hover:bg-black-1/90  transition-colors"
        >
          <SkipForward className="w-5 h-5 text-white-1" />
        </button>
      </div>
    </div>
  );
}
