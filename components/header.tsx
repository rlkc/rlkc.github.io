"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import DropdownMenu from "./dropdown-menu"

export default function Header() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isOpaque, setIsOpaque] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const projectsButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current || !dropdownRef.current || !projectsButtonRef.current) return

      const headerRect = headerRef.current.getBoundingClientRect()
      const dropdownRect = dropdownRef.current.getBoundingClientRect()
      const projectsButtonRect = projectsButtonRef.current.getBoundingClientRect()

      const isInHeader =
        e.clientY >= headerRect.top &&
        e.clientY <= headerRect.bottom &&
        e.clientX >= headerRect.left &&
        e.clientX <= headerRect.right

      const isInDropdown =
        e.clientY >= dropdownRect.top &&
        e.clientY <= dropdownRect.bottom &&
        e.clientX >= dropdownRect.left &&
        e.clientX <= dropdownRect.right

      const isOnProjectsButton =
        e.clientY >= projectsButtonRect.top &&
        e.clientY <= projectsButtonRect.bottom &&
        e.clientX >= projectsButtonRect.left &&
        e.clientX <= projectsButtonRect.right

      if (!isInDropdown && !isOnProjectsButton) {
        setIsProjectsOpen(false)
        setIsOpaque(false)
      }

      // Close dropdown when hovering over other nav items
      if (isInHeader && !isInDropdown && !isOnProjectsButton) {
        setIsProjectsOpen(false)
        setIsOpaque(false)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleProjectsHover = () => {
    setIsProjectsOpen(true)
    setIsOpaque(true)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50" ref={headerRef}>
      <div
        className={`${isOpaque ? "bg-white" : "bg-white/80 backdrop-blur-md"} shadow-lg h-[44px] flex items-center px-8 transition-colors duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="text-zinc-800 text-[24px] font-bold tracking-wide hover:text-zinc-600 transition">
            RYAN LEUNG
          </Link>
          <nav>
            <ul className="flex space-x-12">
              <li>
                <button
                  ref={projectsButtonRef}
                  onMouseEnter={handleProjectsHover}
                  className="text-zinc-800 hover:text-zinc-600 transition-colors duration-200 text-[12px]"
                >
                  Projects
                </button>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-zinc-800 hover:text-zinc-600 transition-colors duration-200 text-[12px]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-800 hover:text-zinc-600 transition-colors duration-200 text-[12px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div ref={dropdownRef}>
        <DropdownMenu isOpen={isProjectsOpen} isOpaque={isOpaque} />
      </div>
    </header>
  )
}

