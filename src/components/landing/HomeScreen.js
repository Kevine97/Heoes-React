import React from 'react'

const HomeScreen = () => {


    const batman = 'https://www.dccomics.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg'
    const linternaVerde = 'https://www.dccomics.com/sites/default/files/HJGLC_1_02_color_rev_final-Gallery_57fc364b710481.90075369.jpg'
    const flash = 'https://www.dccomics.com/sites/default/files/Char_Gallery_Flash_758_6055049612af35.61135649.jpg'


    return (
<div id="carouselExampleIndicators" className="carousel slide animate__animated animate__fadeIn" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="w-100" src={batman} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img  className="w-100" src={linternaVerde} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="w-100" src={flash} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
}

export default HomeScreen
