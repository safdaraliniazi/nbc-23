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
    Abstract submission deadline:September 30th,2023 .Communication of acceptance:October 5th,2023 .Registration deadline:October 10th, 2023
  </p>
 <div className='award '>
 <p>
  Awards will be given for Best Poster and Oral Presentations
  </p>
 </div>
</marquee>
  </div>
    </>
  )
}

export default Marquee