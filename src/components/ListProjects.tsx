import { Flex, Text } from "@chakra-ui/react";

export function ListProjects() {
    return (
        <Flex
            w='1120px'
            h='96px'
            m='-50px auto 0 auto'
            bg='#414146'
            borderRadius='10px'
            align='center'
            p='0 24px 0 24px'
        >
            <Text
                mr='32px'
                fontSize='24px'
                fontWeight='semibold'
                color='#16161A'
            >
                1
            </Text>
            <Text
                w='543px'
                color= '#FFF'
                fontSize= '24px'
                fontStyle= 'normal'
                fontWeight= '500'
            >
                Teste name project
            </Text>
            <Flex gap='40px'>
                <Flex
                    direction='column'
                >
                    <Text
                        color= '#16161A'
                        fontSize= '12px'
                        fontStyle= 'normal'
                        fontWeight= '600'
                        mb='4px'
                    >
                        STATUS
                    </Text>
                    <Text
                        color= '#7D7D80'
                        fontSize= '16px'
                        fontStyle= 'normal'
                        fontWeight= '500'
                    >Em progresso</Text>
                </Flex>
                <Flex
                    direction='column'
                >
                    <Text
                        color= '#16161A'
                        fontSize= '12px'
                        fontStyle= 'normal'
                        fontWeight= '600'
                        mb='4px'
                    >
                        CRIADO EM
                    </Text>
                    <Text
                        color= '#7D7D80'
                        fontSize= '16px'
                        fontStyle= 'normal'
                        fontWeight= '500'
                    >30/03/2024</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}