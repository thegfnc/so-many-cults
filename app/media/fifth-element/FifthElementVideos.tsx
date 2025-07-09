'use client'

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

const GUY_VIDEO_URL = 'https://cdn.sanity.io/files/ojzttvlq/production/a22fc6d1010bf4acdda949c6301bd4cea9c9834a.mp4';
const SWIRL_VIDEO_URL = 'https://cdn.sanity.io/files/ojzttvlq/production/b36d374bf2f8332c6138f388d8469450d145cd20.mp4'

export default function FifthElementVideos() {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ReactPlayer
        src={SWIRL_VIDEO_URL}
        playing={true}
        loop={true}
        muted={true}
        playsInline={true}
        controls={false}
        volume={0}
        width="100%"
        height="100%"
        className="absolute inset-0 object-cover"
      />
      <ReactPlayer
        src={GUY_VIDEO_URL}
        playing={true}
        loop={true}
        muted={true}
        playsInline={true}
        controls={false}
        volume={0}
        width="100%"
        height="100%"
        className={`absolute inset-0 object-cover transition-opacity duration-7000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      />
    </>
  )
}
