import Header from "@/components/header"
import VideoBackground from "@/components/video-background"
import ImageSlider from "@/components/image-slider"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Sidebar from "@/components/sidebar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Sidebar />
      <div className="pt-[44px]">
        <VideoBackground />
        <div className="mb-3" /> {/* 12px gutter */}
        <ImageSlider />
        <div className="relative z-10">
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </main>
  )
}

