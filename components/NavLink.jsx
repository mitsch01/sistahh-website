"use client"

import Link from "next/link"

export default function NavLink({ text, path }) {
  return (
    <Link 
      href={path} 
      className="hover:text-[#FFF8B2]"
    >
      {text}
    </Link>
  )
}
