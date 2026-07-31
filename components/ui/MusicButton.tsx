"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, Music } from "lucide-react";

interface MusicButtonProps {
  audioSrc?: string;
}

export default function MusicButton({ audioSrc = "/audio/music.ogg" }: MusicButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create background audio instance with loop enabled
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback interrupted or blocked:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <button
      onClick={toggleMusic}
      type="button"
      className="
        inline-flex
        items-center
        gap-3
        px-6
        py-2.5
        rounded-full
        museum-plaque
        text-[#E5DDD0]
        text-xs
        md:text-sm
        font-bold
        tracking-widest
        uppercase
        mb-10
        shadow-xl
        border
        border-[#C5A059]/40
        cursor-pointer
        hover:scale-105
        hover:border-[#C5A059]
        transition-all
        duration-300
        select-none
      "
      title={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى الخلفية"}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
          isPlaying ? "bg-[#22C55E] animate-pulse" : "bg-[#A30018] animate-ping"
        }`}
      />

      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#22C55E] animate-bounce" />
          <span>الموسيقى الخلفية قيد التشغيل</span>
        </>
      ) : (
        <>
          <Music className="w-4 h-4 text-[#C5A059]" />
          <span>تشغيل الموسيقى الخلفية 🎵</span>
        </>
      )}
    </button>
  );
}
