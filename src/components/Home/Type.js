import React from "react"
import Typewriter from "typewriter-effect"

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["ML Developer", "Python Programmer", "Java Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
