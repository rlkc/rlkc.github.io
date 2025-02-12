export default function VideoBackground() {
  return (
    <div className="relative w-full h-[715.375px] mb-3">
      <div className="absolute inset-0 bg-black">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

