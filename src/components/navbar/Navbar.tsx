'use client'

import React from 'react'
import { SafeUser } from '@/types/type'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

interface UseMenuProps {
    currentUser: SafeUser | null
}

export default function Navbar({currentUser}:UseMenuProps) {
  return (
    <header>
        <nav className=' bg-gray-200 flex justify-between px-4 py-6 shadow-xl'>
            <div>{currentUser?.name}</div>
            <div className=' flex gap-4'>
                <Link href='/'>Home</Link>
                <Link href='/create'>Create</Link>

                {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}

            </div>
        </nav>
    </header>
  )
}
