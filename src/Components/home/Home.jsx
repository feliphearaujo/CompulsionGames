import { Box } from "@chakra-ui/react"
import { CarousselItems } from "./components/CarousselItems" 
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css'
import { CardItems } from "./components/Carditems";

function Home() {
  return (
    <>
      <CarousselItems className={styles.caroussel}/>
      <CardItems/>
    </>
  )
}

export default Home