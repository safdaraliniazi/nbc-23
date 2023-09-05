import React from 'react'

const ImportantDates = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-12 imp-date-cont text-center'>
                    <h1 className='p-2 m-4'>Important Dates</h1>
                    <h3  className='p-2 m-4' >Early Bird Registration: <span className='bg-success  p-2 rounded text-white'>10th Oct 2023 </span> </h3>
                    <h3 className='m-4'>Regular Registration: <span className='bg-success p-2 rounded text-white'>25th Oct 2023</span> </h3>
                    <h3 className='m-4'>Abstract submission deadline:  <span className='bg-success p-2 rounded text-white'>18th Sept 2023 <img src='/images/test.gif' />  </span></h3>
                    <h3 className='m-4'>Communication of Acceptance: <span className='bg-success p-2 rounded text-white'>23th Sept 2023 <img src='/images/test.gif' /> </span> </h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default ImportantDates