import React, { useRef, useState, useEffect, useCallback } from "react";
import PlayBtn from "@images/icons/playBtn.svg?react";
import PauseBtn from "@images/icons/pauseBtn.svg?react";
import clsx from "clsx";
import styles from "./VideoPlayer.module.scss";

export type VideoPlayerProps = {
  source: string;
  description?: string;
  info: {
    title: string;
    subtitle: string;
  };
} & React.VideoHTMLAttributes<HTMLVideoElement>;

const VideoPlayer = ({ source, description, info, ...rest }: VideoPlayerProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const timeout = 2000;

  const togglePlayback = useCallback(() => {
    if (!videoElementRef.current) return;
    if (videoElementRef.current.paused) videoElementRef.current.play();
    else videoElementRef.current.pause();
  }, []);

  const onPlay = () => {
    setIsPlaying(true);
    setControls();
  };
  const onPause = () => setIsPlaying(false);

  useEffect(() => {
    const videoEl = videoElementRef.current;
    if (!videoEl) return;

    videoEl.addEventListener("play", onPlay);
    videoEl.addEventListener("pause", onPause);

    return () => {
      videoEl.removeEventListener("play", onPlay);
      videoEl.removeEventListener("pause", onPause);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setControls = () => {
    setShowControls(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setShowControls(false), timeout);
  };

  return (
    <figure
      className={styles["video-player"]}
      ref={parentRef}
      onMouseMove={setControls}
    >
      <video
        className={styles["video-player__video"]}
        ref={videoElementRef}
        aria-label={description}
        tabIndex={0}
        onClick={togglePlayback}
        autoPlay
        muted
        loop
        {...rest}
      >
        <source
          src={source}
          type="video/mp4"
        />
      </video>

      <div
        className={clsx(
          styles["video-player__controls"],
          showControls ? "" : styles["video-player__controls_hidden"],
        )}
        role="toolbar"
        aria-label="Video controls"
      >
        <div
          className={styles["video-player__playback-indicator"]}
          role="status"
          aria-live="polite"
        >
          {isPlaying ? <PauseBtn /> : <PlayBtn />}
        </div>
      </div>
    </figure>
  );
};

export default VideoPlayer;
