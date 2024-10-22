import Container from "../ui/Container"
import Hero from "./Hero"
import Perks from "./Perks"

function Landing() {
  return (
    <>
      <Hero />
      <Container>
        <Perks />
      </Container>
    </>
  )
}
export default Landing
