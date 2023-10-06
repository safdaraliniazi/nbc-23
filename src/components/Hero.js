import React from 'react'

const Hero = () => {
  return (
    <>
        <div id="hero-block" class="hero-block">
		<div id="hero-carousel" class="hero-carousel carousel slide carousel-fade" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item-1 carousel-item ">
				</div>
				<div class="carousel-item-2 carousel-item active">
				</div>
				<div class="carousel-item-3 carousel-item">
				</div>
			</div>
		</div>
		<div class="hero-block-mask"></div>
		<div class="container hero-text-center">
			<div class="hero-text-block">
				<img style={{width : '6.5rem'}} src='/images/logos/nbc.png' alt=''/>
				<h1 class="hero-heading mb-2">NBC 2023</h1>
				<div class="hero-meta mb-3"><i class="fa-solid fa-book me-2"></i>
				Bioengineering in Healthcare, Environment & Agriculture
				<br/>
				<i class="fa-solid fa-calendar-days"></i> 9 - 11 Nov</div>
				<div class="hero-intro">Department of Biotechnology and
Medical Engineering <br /><i class="fa-solid fa-location-dot"></i> NIT Rourkela</div>

				<div class="hero-intro m-1 event-mode">Event Mode: Hybrid </div>

				<div class="hero-cta"><a class="btn btn-primary btn-lg" href="https://docs.google.com/forms/d/e/1FAIpQLSfWXWQqs2nyY-9gVB1H5NgGQjUscMe8HyHWxcCx47CkvQIPAg/viewform?usp=sf_link" target="_blank">Register Now</a></div>
				
				
			</div>
		</div>

	</div>
    </>
  )
}

export default Hero
