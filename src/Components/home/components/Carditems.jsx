import { Card, CardBody, Image, Stack, Heading, Text , Divider, CardFooter, ButtonGroup,  Button, HStack} from "@chakra-ui/react"
import '../../../index.css'
import gta from '../../../assets/img/gta.jpg'
import infamous from '../../../assets/img/infamous.jpg'
import minecraft from '../../../assets/img/minecraft.jpg'
import injustice from '../../../assets/img/injustice.jpg'

export function CardItems(){

    return(
        <>
        <HStack style={{justifyContent:'space-around', margin:'30px'}}>
        <Card bg={"orange"} maxW='sm'>
  <CardBody >
    <Image
      src={gta}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>GTA V</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam repellat, atque excepturi quis similique illo fuga ratione sint porro nostrum dolorem dicta omnis sunt. Dolor cum perspiciatis expedita maxime.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>

  <CardFooter >
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='purple'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='purple'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card bg={"orange"} maxW='sm'>
  <CardBody >
    <Image
      src={infamous}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Infamous Second Son</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis quaerat ducimus reiciendis numquam, distinctio aspernatur nostrum iusto facilis autem obcaecati eligendi saepe dolorem. Quaerat hic provident soluta nisi explicabo.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>

  <CardFooter >
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='purple'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='purple'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card bg={"orange"} maxW='sm'>
  <CardBody >
    <Image
      src={minecraft}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Minecraft</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta, quis id, nostrum recusandae corrupti laborum molestias officiis quisquam sed eius nemo aut autem quos eum illo, facilis amet aliquam.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>

  <CardFooter >
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='purple'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='purple'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card bg={"orange"} maxW='sm'>
  <CardBody >
    <Image
      src={injustice}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Injustice Gods Among Us</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta praesentium vero consequatur. Quasi iste eos voluptas quae repudiandae reiciendis similique vero dignissimos facere unde, temporibus odit ipsa, aliquam quibusdam eligendi!
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>

  <CardFooter >
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='purple'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='purple'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

        </HStack>
            
        </>
    
    

    )
}