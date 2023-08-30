import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Publication = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <div class="p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-8 p-lg-10 mx-auto my-5">
      <h1 class="fw-normal">Publications</h1>
      <p class="lead fw-normal">National Bioengineering Conference 2023 welcomes submission of abstracts for original contribution All the abstract will be published in the conference proceedings and selected papers will be published in a special issue of Scopus indexed Industrial Biotechnology Journal after peer review.</p>
      <a class="btn btn-outline-secondary" href="#">Coming soon</a>
      <img className='img-fluid' src='/images/publication.jpeg' />
    </div>

  </div>
    <Footer />
    </>
  )
}

export default Publication