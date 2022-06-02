import Carousel from 'react-bootstrap/Carousel'

const Main = () => {
  return (
    <div className='carouselContainer'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="imgCarrosuel"
            src={require("../src/image/amdImagen.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>AMD</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="imgCarrosuel"
            src={require("../src/image/nvidiaImagen.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>NVIDIA</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Main