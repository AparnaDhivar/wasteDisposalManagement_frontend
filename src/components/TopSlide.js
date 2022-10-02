import Carousel from 'react-bootstrap/Carousel';

function TopSlider(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.Image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.Image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.Image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default TopSlider;