export default function Projects() {
  return (
    <section id="projects" className="px-3 pt-3">
      {" "}
      {/* 12px gutters from top and sides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {" "}
        {/* 12px gutters between items */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="relative w-full pt-[100%]">
            {" "}
            {/* 1:1 aspect ratio */}
            <img
              src="/placeholder.svg"
              alt={`Project ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

