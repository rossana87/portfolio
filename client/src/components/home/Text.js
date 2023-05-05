import React from 'react'
import Typewriter from 'typewriter-effect'

function Text() {
  return (
    <Typewriter className='typewriter'
      options={{
        strings: [
          'I am a Junior Front-End Developer',
          'I am a Junior Back-End Developer',
          'I am a Junior Full-Stack Developer'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text