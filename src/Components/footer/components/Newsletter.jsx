import { HStack, Flex, Box } from "@chakra-ui/react"
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

export function Newsletter(){
    return(
        <>
        <Flex mb={5}>
            <FormControl>
                <Box>
                    <FormLabel fontSize='2em'>Assine nossa Newsletter para ficar por dentro de novidades</FormLabel>
                </Box>
                <HStack>
                    <Input type='email' placeholder='Digite seu email' _placeholder={{ opacity: 1, color: 'black' }}  isInvalid errorBorderColor='black'/>
                    <Button colorScheme='purple' type='submit'>Submit</Button>
                </HStack>
            </FormControl>

        </Flex>
            
        </>
        
    )
}