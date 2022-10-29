import Carousel from "react-bootstrap/Carousel";

function CuadrosCarousel() {
  return (
    <Carousel>
      {/* IMAGEN 0 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dvcrta1qy/image/upload/v1663966649/cuadros/imagenes/Cuadros66/WhatsApp_Image_2022-09-23_at_17.50.34_nijt8q.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      {/* IMAGEN 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dvcrta1qy/image/upload/v1660148786/cuadros/imagenes/Cuadro16/20201201_142248_HDR_1_dhxjxd.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      {/* IMAGEN 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dvcrta1qy/image/upload/v1660148770/cuadros/imagenes/Cuadro20/20201219_125328_HDR_umtohn.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      {/* IMAGEN 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dvcrta1qy/image/upload/v1660148759/cuadros/imagenes/Cuadro27/20210408_210829_HDR_1_fftwo6.jpg"
          alt="First slide"
        />
      </Carousel.Item>
       {/* IMAGEN 4 */}
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dvcrta1qy/image/upload/v1660148760/cuadros/imagenes/Cuadro34/20210809_172205_1_ttbc19.jpg"
          alt="First slide"
        />
      </Carousel.Item>
        {/* IMAGEN 5 */}
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dvcrta1qy/image/upload/v1660148770/cuadros/imagenes/Cuadro38/20201204_233153_HDR_wmalak.jpg"
          alt="First slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default CuadrosCarousel;
