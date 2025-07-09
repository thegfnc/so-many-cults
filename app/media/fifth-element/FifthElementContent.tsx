'use client'

import Link from 'next/link';
import { useGlitch } from 'react-powerglitch'

export default function FifthElementContent() {
  const glitch = useGlitch()

  return (
    <Link
      className="text-2xl md:text-4xl font-bold uppercase"
      href="https://instagram.com/somanycults"
      ref={glitch.ref}
    >Become A Follower</Link>
  );
}
