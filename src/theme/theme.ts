import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        black: '#000',
        white: '#fff',
        
        gray: {
            901: '#212121',
            801: '#292929',
            701: '#383838',
            301: '#747474',
            101: '#D0D0D0',

        }
    }
})

export default theme