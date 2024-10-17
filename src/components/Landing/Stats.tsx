"use client"

import NumberFlow from "@number-flow/react"
import { useState } from "react"

function Stats() {
  const [number, setNumber] = useState(1000)

  return (
    <>
      <NumberFlow
        value={number}
        transformTiming={{ duration: 700, easing: "ease" }}
        format={{ notation: "standard" }} // Intl.NumberFormat options
        locales="en-US" // Intl.NumberFormat locales
      />
    </>
  )
}
export default Stats
