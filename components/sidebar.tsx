import Link from "next/link"
import { Twitch, DiscIcon as Discord, Instagram, Youtube, Twitter, Facebook, Mail } from "lucide-react"

export default function Sidebar() {
  return (
    <aside
      className="fixed left-8 top-1/2 -translate-y-1/2 h-auto w-[50px] flex flex-col items-center py-8 z-40
      bg-white/40 backdrop-blur-sm
      rounded-lg
      shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
    >
      <nav className="flex flex-col items-center gap-8">
        <Link href="#" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-200">
          <Instagram className="w-[18px] h-[18px]" />
        </Link>
        <Link href="#" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-200">
          <Youtube className="w-[18px] h-[18px]" />
        </Link>
        <Link href="#" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-200">
          <Twitter className="w-[18px] h-[18px]" />
        </Link>
        <Link href="#" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-200">
          <Facebook className="w-[18px] h-[18px]" />
        </Link>
        <Link href="#" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-200">
          <Mail className="w-[18px] h-[18px]" />
        </Link>
      </nav>
    </aside>
  )
}

