/* eslint-disable jsx-a11y/alt-text */
import { HStack, StackProps, Text } from '@chakra-ui/react'

interface LogoProps extends StackProps{
}

export function Logo( {...rest } : LogoProps) {
    return (       
        <HStack w='100%' h='50%' zIndex='1' justify='center' fontFamily={'"Press Start 2P"'} {...rest} ><Text as='span'>RpGaming</Text><Text as='span' m='0' color='purple.500'>.</Text></HStack>
                        
    )
}