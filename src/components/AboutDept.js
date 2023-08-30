import React from 'react'

const AboutDept = () => {
  return (
    <>
        <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="/images/about/inst.jpeg"
        className="d-block rounded mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="fw-bold lh-1 mb-3">
        The Institute
      </h1>
      <p className="about-intro">
      National Institute of Technology, Rourkela is one of
the top ranking Institute for technical education
established by the Government of India (Rank 29 in
Research and 37 in NIRF ranking overall and 601-650
in QS world ranking for Computer Science and IT).
NIT Rourkela is a prestigious institute with a
reputation for excellence in research and education at
undergraduate, postgraduate and doctoral levels.
      </p>
      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
          Default
        </button>
      </div> */}
    </div>
  </div>
</div>



<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-lg-6">
      <h1 className="fw-bold lh-1 mb-3">
        The Department
      </h1>
      <p className="about-intro">
      The Department of Biotechnology and Medical
Engineering was established in 2007. The department
is presently offering B. Tech. and M. Tech. degrees
(in Biotechnology as well as Biomedical Engineering)
and Ph. D. degree. The faculty members conduct
individual as well as collaborative research in diverse
areas like Cell & Molecular Engineering, Tissue
Engineering & Biomaterials, Bioprocess Engineering,
Environmental & Plant Biotechnology, Biomechanics
& Biotransport Engineering, Medical Electronics &
Instrumentation etc. The department has state of art
laboratories that are well equipped for basic and
applied research.
      </p>
      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
          Default
        </button>
      </div> */}
    </div>
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="/images/about/dept.jpeg"
        className="d-block rounded mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
   
  </div>
</div>




    </>
  )
}

export default AboutDept