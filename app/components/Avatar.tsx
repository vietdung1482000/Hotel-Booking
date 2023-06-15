'use client';

import Image from "next/image";
import { SafeUser } from "../types";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar : React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <Image className="rounded-full" src={src || '/avatar.jpg'} height="30" width="30" alt="avatar" />
  )
}

export default Avatar