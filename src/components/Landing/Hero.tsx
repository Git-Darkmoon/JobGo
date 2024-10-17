import Button from "../ui/Button"

function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-screen relative object-cover"
          src="/heroVideo.mp4"
          typeof="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="video-content space-y-2">
        <h1 className="text-8xl text-gradient-gray font-semibold italic">
          Job<span className="text-primary font-bold">Go</span>
        </h1>
        <h3 className="font-light text-2xl">a new way to track your jobs</h3>
        <Button variant="primary">Get Started</Button>
      </div>
    </section>
  )
}
export default Hero
