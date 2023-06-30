import { Box, Flex,Image, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex as='header'
            w='100%'
            h='280px'
            align='center'
            bg='gray.801'
        >
            <Flex
                w='1120px'
                margin='0 auto'
                justifyContent='space-between'
            >
                <Image src='/assets/logo.svg' alt="" />
                <Flex>
                    <Flex
                        direction='column'
                        mr='16px'
                        alignItems='end'
                        justify='center'
                    >
                            <Text color='white' fontSize='16px' fontWeight='semibold'>Ecthon Almeida</Text>
                            <Text color='#BFBFCC' fontSize='14px'>Sair</Text>
                        </Flex>
                        <Image
                            w='56px'
                            h='56px'
                            borderRadius='full'
                            src="https://github.com/ecthon.png" 
                        />
                </Flex>
            </Flex>
        </Flex>
    )
}