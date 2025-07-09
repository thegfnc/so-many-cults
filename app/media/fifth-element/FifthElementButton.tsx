'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiArrowLeftLine } from "react-icons/ri";
import { useGlitch } from 'react-powerglitch'

export default function FifthElementButton() {
  const [isFadingIn, setIsFadingIn] = useState(false);
  const glitch = useGlitch()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingIn(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Link
      className={`block text-xl md:text-4xl font-bold uppercase bg-white text-black hover:!no-underline py-2 px-4 flex items-center gap-2 transition-opacity duration-7000 ${isFadingIn ? 'opacity-100' : 'opacity-0'}`}
      href="https://instagram.com/somanycults"
      ref={glitch.ref}
    >Become A Follower Here <RiArrowLeftLine /></Link>
  );
}
