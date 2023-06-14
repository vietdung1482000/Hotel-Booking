'use client';

import Image from "next/image";

const Avatar = () => {
  return (
    <Image className="rounded-full" src="/avatar.jpg" height="30" width="30" alt="avatar" />
  )
}

export default Avatar