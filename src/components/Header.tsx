import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
    return (
        <Flex as='header'
            w='100%'
            h='80px'
            align='center'
            bg='gray.800'
        >
            <Flex
                w='1120px'
                margin='0 auto'
                justify='space-between'
            >
                <Text color='white'>ToDo</Text>
                <Text color='white'>login</Text>
            </Flex>
        </Flex>
    )
}