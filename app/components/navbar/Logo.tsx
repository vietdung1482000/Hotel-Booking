'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <Image alt="logo" className="hidden md:block cursor-pointer" height="70" width="50" src="/logo.jpg" />
    )
}

export default Logo