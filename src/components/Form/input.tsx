import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string,
    label?: string,
    error?: FieldError
} 

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error , ...rest }, ref) => {
  return (
      <FormControl mb='2' isInvalid={!!error}>
          {label && <FormLabel htmlFor={name} color='whiteAlpha.700' ml='1'>{label}</FormLabel>}
          <ChakraInput
            id={name}
            name={name}
            focusBorderColor='purple.500'

            bg='blackAlpha.300'
            variant='filled'
            _hover={{
              bg: 'blackAlpha.500'
            }}
            size='lg'
            ref={ref}
            {...rest}
          />
          
          {!!error  && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
            )
          }
              
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)