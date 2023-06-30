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
      
    </Flex>
  )
}
