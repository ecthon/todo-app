import { Box, Button, Divider, Flex,Image, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex as='header'
            direction='column'
            w='100%'
            h='280px'
            align='center'
            bg='#16161A'
        >
            <Flex
                w='1120px'
                h='106px'
                margin='0 auto'
                justifyContent='space-between'
                align='center'
                borderBottom='1px solid #202025'
                mb='32px'
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

            <Flex
                justifyContent='space-between'
                w='1120px'
            >
                <Flex
                    gap='48px'
                >
                    <Flex
                        gap='16px'
                        align='center'
                    >
                        <Text color='white' fontSize='14px' fontWeight='semibold'>PROJETOS</Text>
                        <Text
                            as='span'
                            p='2px 8px'
                            borderRadius='full'
                            bg='#414146'
                            color='white'
                            fontSize='14px'
                            fontWeight='semibold'
                        >
                            10
                        </Text>
                    </Flex>
                    <Flex
                        gap='16px'
                        align='center'
                    >
                        <Text color='white' fontSize='14px' fontWeight='semibold'>PROJETOS</Text>
                        <Text
                            as='span'
                            p='2px 8px'
                            borderRadius='full'
                            bg='#414146'
                            color='white'
                            fontSize='14px'
                            fontWeight='semibold'
                        >
                            10
                        </Text>
                    </Flex>
                    <Flex
                        gap='16px'
                        align='center'
                    >
                        <Text color='white' fontSize='14px' fontWeight='semibold'>PROJETOS</Text>
                        <Text
                            as='span'
                            p='2px 8px'
                            borderRadius='full'
                            bg='#414146'
                            color='white'
                            fontSize='14px'
                            fontWeight='semibold'
                        >
                            10
                        </Text>
                    </Flex>
                </Flex>

                <Button
                    padding='12px 32px'
                    borderRadius='full'
                    bg='#E9A800'
                    fontWeight='semibold'
                    fontSize='14px'
                    color='white'
                    >
                        NOVO PROJETO
                    </Button>
            </Flex>
        </Flex>
    )
}