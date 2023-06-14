'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItems from './MenuItems';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface currentUserProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<currentUserProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    {
                        currentUser ? currentUser.name : "DungVV your home"
                    }
                </div>
                <div onClick={toggleOpen} className="p-4 md:py-1 md:py-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            {
                                currentUser ? (
                                    <>
                                        <MenuItems onClick={() => {}} label='My trips' />
                                        <MenuItems onClick={() => {}} label='My favorites' />
                                        <MenuItems onClick={() => {}} label='My reservations' />
                                        <MenuItems onClick={() => {}} label='My properties' />
                                        <MenuItems onClick={() => {}} label='My home' />
                                        <hr />
                                        <MenuItems onClick={() => signOut()} label='LogOut' />
                                    </>
                                ) : (
                                    <>
                                        <MenuItems onClick={loginModal.onOpen} label='Login' />
                                        <MenuItems onClick={registerModal.onOpen} label='Sign Up' />
                                    </>
                                )
                            }

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserMenu