"use client"

import Link from "next/link"

export default function NavLink({ text, path }) {
  return (
    <Link href={path} className='text-[0.8em] font-semibold tracking-wider hover:text-[#FFF8B2] hover:scale-105 transition-transform duration-300'>
      {text}
    </Link>
  )
}
