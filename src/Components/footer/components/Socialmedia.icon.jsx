import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { HStack, Box } from '@chakra-ui/react'
import  styles from '../Footer.module.css'

export function SocialMedia(){
    return(
        <>
            
            <HStack className={styles.socialmedia} pos="absolute" right="30" >
                <Box _hover={{ color: "blue", stroke: "blue" }}>
                <FontAwesomeIcon icon={faYoutube} color="currentColor" w={["2vw", "2vw", "5.5vw"]} h="auto"/>
                </Box>
                <Box _hover={{ color: "blue", stroke: "blue" }}>
                <FontAwesomeIcon icon={faInstagram} color="currentColor" w={["2vw", "2vw", "5.5vw"]} h="auto"/>
                </Box>
                <Box _hover={{ color: "blue", stroke: "blue" }}>
                <FontAwesomeIcon icon={faFacebook} color="currentColor" w={["2vw", "2vw", "5.5vw"]} h="auto"/>
                </Box>
                <Box _hover={{ color: "blue", stroke: "blue" }}>
                <FontAwesomeIcon icon={faXTwitter} color="currentColor" w={["2vw", "2vw", "5.5vw"]} h="auto"/>
                </Box>
               
            </HStack>
            
        </>
        
    )
}