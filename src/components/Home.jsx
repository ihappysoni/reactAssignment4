import React from 'react'
const Home = () => {
  return (
    <>
    
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://sustainable9.com/wp-content/uploads/2022/02/Three-Points-Blvd_061-e1649695865841.jpg" height={"720px"} width={"100vw"} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg" className="d-block w-100" alt="..." />
    
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br /><br /> ©Happy Soni
    </>
  )
}

export default Home
