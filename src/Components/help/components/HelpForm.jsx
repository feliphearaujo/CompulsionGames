import { 
    Flex,
    Box,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    HStack, 
    Text,
    Textarea

} from "@chakra-ui/react";


export function FormHelp(){

    return(
        <Box p={10} >

            <Flex>
                <Center w="100%"
          bg="dark"
          top={90}
          borderRadius={5}
          p="2"
          color={"white"}
          boxShadow={"0 1px 2px #yellow"}
          marginBottom={150}
          >
                   <FormControl display='flex' flexDir='column' gap='4' mt={5}>
                    <FormLabel>Como podemos te ajudar?</FormLabel>
                   <HStack spacing='5'>
                    <Box w='100%'>
                        <FormLabel>
                            Nome Completo
                        </FormLabel>
                        <Input id='nome' placeholder='Nome Completo' focusBorderColor='yellow.400'/>
                    </Box>
                    <Box w='100%'>
                <FormLabel>E-mail</FormLabel>
                <Input id='email' placeholder='E-mail' focusBorderColor='yellow.400' />  
              </Box>            
                   </HStack>

                   <HStack spacing='5'>
              
              
            </HStack>

            <HStack spacing='5'>
              <Box w='100%'>
                <FormLabel>Celular</FormLabel>
                <Input id='cel' type="number" placeholder='Celular' focusBorderColor='yellow.400' />
              </Box>
              <Box w='100%'>
                <FormLabel>Telefone</FormLabel>
                <Input id='tel' type="number" placeholder='Telefone' focusBorderColor='yellow.400'/>
              </Box>
            </HStack>
            <FormLabel>Informe seu problema</FormLabel>
      <Textarea
        placeholder='Informe seu problema'
        size='sm'
        focusBorderColor='yellow.400'
      />

            <HStack justify='center' >
                    <Button w={250}
              fontWeight={900}
              type='submit'
              bg='orange'
              fontSize='xl'
              m={5}
              >Enviar</Button>
            </HStack>
                    
                    </FormControl> 
                </Center>
            </Flex>
        </Box>
    )
}