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
          <Text color='white'>Title</Text>
          <Text color='white'>NOVO PROJETO</Text>
        </Flex>

        <Flex
          w='100%'
          h='160px'
          direction='column'
          bg='gray.901'
          borderRadius='10px'
          p='20px'        
        >
          <Text
            fontSize='24px'
            fontWeight='semibold'
            color='gray.101'
          >
            Lorem Ipsum Dolor
          </Text>
          <Text
            fontSize='18px'
            color='gray.301'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis impedit repellendus quod rem voluptatem? Deserunt laudantium molestiae in mollitia, autem cupiditate adipisci et eum eos, obcaecati blanditiis repudiandae suscipit.
          </Text>

        </Flex>
      </Flex>  
    </Flex>
  )
}
