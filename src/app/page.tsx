'use client'
import { Header } from "@/components/Header";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w='100%'
      h='100vh'
      bg='gray.901'
      direction='column'
      align='center'
    >
      <Header />
      <Flex
        w='928px'
        h='400px'
        direction='column'
        bg='gray.701'
        mt='64px'
        borderRadius='10px'
        p='28px'
      >
        <Flex
          justifyContent='space-between'
          w='100%'
          mb='32px'
        >
          <Text
          fontSize='24px'
          fontWeight='semibold'
          color='white'
          >
            Title
          </Text>
          <Text color='white'>NOVO PROJETO</Text>
        </Flex>

        <Flex
          w='100%'
          h='140px'
          bg='gray.901'
          borderRadius='10px'
          align='center'
          p='18px'        
        >
          <Flex
            direction='column'
          >
            <Text
              fontSize='24px'
              fontWeight='semibold'
              color='gray.101'
              mb='16px'
            >
              Lorem Ipsum Dolor
            </Text>
            <Text
              fontSize='16px'
              color='gray.301'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis impedit repellendus quod rem voluptatem.
            </Text>
          </Flex>

          <Text color='red'>...</Text>

        </Flex>
      </Flex>  
    </Flex>
  )
}
