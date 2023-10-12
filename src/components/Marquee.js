import React from 'react'

const Marquee = () => {
  return (
    <>
  <div className='bg-info-subtle '>
  <marquee direction="right">
  <p>
    <span >
      <b>Important dates</b>
      <br />
    </span>
    Abstract submission deadline:October 16th,2023 .Communication of acceptance:October 21st,2023 .Registration deadline:October 25th, 2023
  </p>
 <div className='award '>
 <p>
  Awards will be given for Best Poster and Oral Presentations
  </p>
  <p className='text-white'>
  Online participation is permitted after registration
  </p>
 </div>
</marquee>
  </div>
    </>
  )
}

export default Marquee