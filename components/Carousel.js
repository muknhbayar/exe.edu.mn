import React from 'react'

const Carousel = () => {
  return (

    <div id="carouselExampleCaptions" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-0">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <video className="w-full" autoPlay loop muted>
        <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(50, 123, 233, 0.1)'}}>
        <div className="carousel-caption hidden md:block absolute text-center">
          <h3 className="text-2xl">Light blue mask</h3>
        </div>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <video className="w-full" autoPlay loop muted>
        <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(135, 50, 233, 0.1)'}}>
        <div className="carousel-caption hidden md:block absolute text-center">
          <h3 className="text-2xl">Light purple mask</h3>
        </div>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <video className="w-full" autoPlay loop muted>
        <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(50, 233, 90, 0.1)'}}>
        <div className="carousel-caption hidden md:block absolute text-center">
          <h3 className="text-2xl">Light green mask</h3>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

//     <div id="carouselExampleCrossfade" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
//   <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
//     <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
//     <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to={1} aria-label="Slide 2" />
//     <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to={2} aria-label="Slide 3" />
//   </div>
//   <div className="carousel-inner relative w-full overflow-hidden">
//     <div className="carousel-item active float-left w-full">
//       <img src="/assets/img/header.png" className="block w-full" alt="Wild Landscape" />
//     </div>
//     <div className="carousel-item float-left w-full">
//       <img src="/assets/img/header2.png" className="block w-full" alt="Camera" />
//     </div>
//     <div className="carousel-item float-left w-full">
//       <img src="/assets/img/header3.png" className="block w-full" alt="Exotic Fruits" />
//     </div>
//   </div>
//   <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
//     <span className="visually-hidden">ӨМНӨХ</span>
//   </button>
//   <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="next">
//     <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
//     <span className="visually-hidden">ДАРААХ</span>
//   </button>
// </div>

  )
}

export default Carousel