import React from "react"
import Typewriter from "typewriter-effect"

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["iOS Developer", "Swift Developer", "App Architect"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
