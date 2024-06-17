import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import sleepingdogs from '../../../assets/img/sleeping-dogs.jpg'
import fc2024 from '../../../assets/img/fc2024.jpeg'
import hollowknight from '../../../assets/img/hollow-knight.png'
import { Flex} from '@chakra-ui/react';
import './Custom.carousel.css';

export function CarousselItems() {
  return (
      <Flex maxH="600px" my={2}>
      <Carousel class="carousel carousel-dark slide" data-bs-theme="purple" >
      <Carousel.Item >
        <img
          className="img-200"
          src={sleepingdogs}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-liverpool"
          src={fc2024}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-200"
          src={hollowknight}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </Flex>

    
      
    
  );
}

