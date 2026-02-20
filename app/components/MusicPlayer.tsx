"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Pause, Disc } from "lucide-react";
import styles from "./MusicPlayer.module.css";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("/Beautiful-In-White.mp3");
    audioRef.current.loop = true;

    const handleStart = () => {
      if (audioRef.current) {
        // Try playing
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log("Auto-play prevented:", error);
              setIsPlaying(false);
            });
        }
      }
    };

    window.addEventListener("startMethod", handleStart);
    // Also try to play on ANY click as a fallback if the first one failed
    const handleGlobalClick = () => {
      if (audioRef.current && audioRef.current.paused && !isPlaying) {
        handleStart();
      }
    };
    window.addEventListener("click", handleGlobalClick, { once: true });

    return () => {
      window.removeEventListener("startMethod", handleStart);
      window.removeEventListener("click", handleGlobalClick);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []); // Remove dependency on isPlaying to avoid re-attaching listener

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((e) => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.playerWrapper}>
      <div
        className={`${styles.vinyl} ${isPlaying ? styles.spinning : ""}`}
        onClick={togglePlay}
      >
        <Disc size={40} className={styles.discIcon} />
        <div className={styles.centerLabel} />
      </div>

      <div className={`${styles.infoBox} ${isPlaying ? styles.showInfo : ""}`}>
        <span className={styles.scrollingText}>
          Beautiful in White - Westlife
        </span>
      </div>

      <button
        onClick={togglePlay}
        className={styles.controlButton}
        aria-label={isPlaying ? "Dừng nhạc" : "Phát nhạc"}
      >
        {isPlaying ? <Pause size={16} /> : <Music size={16} />}
      </button>
    </div>
  );
}
