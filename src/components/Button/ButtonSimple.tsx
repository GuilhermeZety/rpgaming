import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonSimpleProps extends ButtonProps{
    children: ReactNode,
    inverted?: boolean
}

export function ButtonSimple({ inverted, children, ...rest } : ButtonSimpleProps) {
    return (
        <Button                       
            bg={inverted ? 'blackAlpha.500' : 'purple.500'} 
            p='8'
            m='4'
            size='lg' 
            fontWeight='normal' 
            fontSize='xl'
            _hover={{
                filter:'brightness(0.7)',
                transition: 'all 0.2s'
            }}
            {...rest}
        >
        {children}
        </Button>
    )
}