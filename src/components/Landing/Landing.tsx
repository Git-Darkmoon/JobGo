import Container from "../ui/Container"
import Navbar from "../ui/Navbar"
import Hero from "./Hero"
import Perks from "./Perks"
import Stats from "./Stats"

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <Perks />
        {/* <Stats /> */}
      </Container>
    </>
  )
}
export default Landing
