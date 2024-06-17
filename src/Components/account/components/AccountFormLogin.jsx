import { 
    Flex,
    Box,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack, 
    HStack,


} from "@chakra-ui/react";


export function FormLogin(){

    return(
        <Box p={50} >
            <Flex>
                <Center w="100%"
          bg="dark"
          color={"white"}
          top={90}
          marginBottom={170}
          borderRadius={5}
          p={20}
          boxShadow={"0 1px 2px yellow"}>
                   <FormControl display='flex' flexDir='column' gap='4' mt={5}>
                   <VStack spacing='5'>
                    <Box w='100%'>
                        <FormLabel>
                            Login
                        </FormLabel>
                        <Input id='nome' placeholder='Login' focusBorderColor='yellow.400'/>
                    </Box>
                    <Box w='100%'>
                <FormLabel>Senha</FormLabel>
                <Input id='email' placeholder='Senha' focusBorderColor='yellow.400' />  
              </Box>            

            </VStack>

            <HStack justify='center' >
                    <Button w={250}
              fontWeight={900}
              type='submit'
              fontSize='xl'
              colorScheme='orange' variant='solid'
              
              m={5}
              >Enviar</Button>
              <Button w={250}
              fontWeight={900}
              type='submit'
              fontSize='xl'
              colorScheme='red' variant='solid'
              
              m={5}
              >Cadastrar</Button>
            </HStack>
                    
                    </FormControl> 
                </Center>
            </Flex>
        </Box>
    )
}