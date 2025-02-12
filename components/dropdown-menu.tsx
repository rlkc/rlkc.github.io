import { motion, AnimatePresence } from "framer-motion"

interface DropdownMenuProps {
  isOpen: boolean
  isOpaque: boolean
}

export default function DropdownMenu({ isOpen, isOpaque }: DropdownMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay with gradient blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            style={{ top: "44px" }}
          >
            {/* Center blur area */}
            <div className="absolute inset-0 bg-black/5 backdrop-blur-sm">
              {/* Less blurred edges using gradients */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-black/5" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-transparent to-black/5" />
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent to-black/5" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-transparent to-black/5" />
            </div>
          </motion.div>

          {/* Dropdown content */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-0 right-0 ${isOpaque ? "bg-white" : "bg-white/80 backdrop-blur-md"} border-t border-zinc-200 z-50 transition-colors duration-300`}
            style={{ top: "44px" }}
          >
            <div className="container mx-auto px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                  <h3 className="text-zinc-400 text-xs mb-4">Featured Projects</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Mobile Applications
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        UI/UX Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Brand Identity
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-zinc-400 text-xs mb-4">Categories</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Frontend
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Backend
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Full Stack
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="text-zinc-400 text-xs mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm">
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

