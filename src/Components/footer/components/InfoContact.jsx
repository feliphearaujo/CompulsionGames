import { VStack } from "@chakra-ui/react";
import styles from '../Footer.module.css'

export function InfoContact(){
    return(
        <VStack pos="absolute" left="30" spacing='1px' mt={5} className={styles.contact}>
            <p>Rua das Camélias, Floresta, xxxxx-xxx</p>
            <p>(99)99999-9999</p>
            <p>contato@caliburn.com</p>
        </VStack>
    )
}