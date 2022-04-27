/* eslint-disable jsx-a11y/alt-text */

//Next
import { GetServerSideProps } from "next";
import Link  from "next/link";

//Icons
import { SiDiscord, SiFacebook, SiTwitch } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

//Components
import { Input } from "../components/Form/input";
import { Logo } from "../components/Logo";
import { ButtonSimple } from "../components/Button/ButtonSimple";

//Chakra
import { Flex, Link as ChakraLink, Text, Image, Stack,  useBreakpointValue, Heading, Box, Icon } from "@chakra-ui/react";

//Form
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";

//Interface Result Form
interface LoginFormData{
    email: string,
    password: string
}

//Config Form Validations
const loginFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
})

export default function Login() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(loginFormSchema)
    })

    const handleSignIn: SubmitHandler<LoginFormData> = async (values, event) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values)
    }
    
    if(isWideVersion){
        return (
            <Flex
                w='100vw'
                h='100vh'
                align='center'
                justify='space-between'>
    
                <Stack direction='row'>
    
                    <Image src='/hubImage.png' h='100vh' maxW='50%'/>
    
                    <Flex w='50vw' justifyContent='center' align='center'>
                        <Flex
                            minW={465}
                            p='8'
                            borderRadius='8'
                            justify='center'
                        >
                            <Flex 
                                as='form' 
                                flexDirection='column' 
                                gridGap='1'  
                                align='center'
                                onSubmit={handleSubmit(handleSignIn)}
                            >
    
                                <Heading 
                                    mr='auto' 
                                    ml='6' 
                                    fontSize='5xl' 
                                    fontWeight='normal' 
                                    color='whiteAlpha.500'
                                >Entrando no</Heading>
                                <Logo justify='end' w='100%' fontSize={'3xl'}/>
                                
                                <Text 
                                    mb='2' 
                                    as='span' 
                                    color='whiteAlpha.500' 
                                    maxW={320} 
                                    textAlign='center' 
                                    fontSize='xl'
                                >
                                    Insira suas informações abaixo ou entre com uma conta social.
                                </Text>
    
                                <Input 
                                    name="email" 
                                    label="E-Mail"
                                    error={formState.errors.email}
                                    {...register('email')}
                                ></Input>
                                <Input 
                                    name="password" 
                                    type='password' 
                                    label="Senha"
                                    error={formState.errors.password}
                                    {...register('password')}
                                ></Input>
                                    
                                <Flex w='100%'>
                                    <Link href='' passHref>
                                        <ChakraLink ml='auto' 
                                            color='whiteAlpha.700'
                                            fontSize='md'
                                            _hover={{
                                                color: 'purple.500',
                                                transition: 'all 0.3s',
                                                textDecoration: 'underline '
                                            }} 
                                        >Esqueceu a senha?</ChakraLink>
                                    </Link>
                                </Flex>
    
                                <ButtonSimple 
                                    w='100%'
                                    inverted
                                    type="submit"
                                    isLoading={formState.isSubmitting}
                                >
                                    Entrar
                                </ButtonSimple>
    
                                <Flex 
                                    alignItems='center' 
                                    w='100%' 
                                    mb='2' 
                                    px='2' 
                                    justify='space-between'
                                >
                                    <Icon 
                                        as={SiFacebook} 
                                        color='facebook.500' 
                                        fontSize='4xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
                                    <Icon 
                                        as={FcGoogle} 
                                        color='facebook.500' 
                                        fontSize='4xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
    
                                    <Icon 
                                        as={SiDiscord} 
                                        color='white' 
                                        fontSize='4xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
    
                                    <Icon 
                                        as={SiTwitch} 
                                        color='purple.400' 
                                        fontSize='3xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
                                </Flex>                        
                                <Text color='whiteAlpha.700' fontSize='md'> Não possui uma conta? 
                                    <Link href='/signup' passHref >
                                        <ChakraLink color='purple.400' ml='1'>Registrar-se</ChakraLink>
                                    </Link>
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
    
                </Stack>
            </Flex>
        )        
    }
    else{
        return(
            <Flex>
                <Stack direction='column' h='100vh'>
                    <Box>
                        <Logo position='fixed' fontSize={'4xl'}/>
                        <Image src='/hubImage.png' minW='100vw' position='fixed' />                             
                    </Box>    
    
                    <Flex 
                        w='100vw' 
                        justifyContent='center' 
                        align='end' 
                        h='100%'
                    >
                        <Flex
                            w='100vw'
                            maxH='50vh'
                            p='6'
                            borderRadius='30'
                            justify='center'
                            zIndex='1'bg='blue.900'
                        >
                            <Flex
                                as='form'
                                minW={320}
                                flexDirection='column' 
                                gridGap='1'  
                                align='center'
                                onSubmit={handleSubmit(handleSignIn)}
                            >
            
                                <Input 
                                    name="email" 
                                    label="E-Mail"
                                    error={formState.errors.email}
                                    {...register('email')}
                                ></Input>
                                <Input 
                                    name="password" 
                                    type='password' 
                                    label="Senha"
                                    error={formState.errors.password}
                                    {...register('password')}
                                ></Input>
                                    
                                <Flex w='100%'>
                                    <ChakraLink ml='auto' 
                                        color='whiteAlpha.700'
                                        _hover={{
                                            color: 'purple.500',
                                            transition: 'all 0.3s'
                                        }} 
                                    >Esqueceu a senha?</ChakraLink>
                                </Flex>
    
                                <ButtonSimple 
                                    w='100%'
                                    type="submit"
                                    isLoading={formState.isSubmitting}
                                >
                                    Entrar
                                </ButtonSimple>
    
                                <Flex 
                                    alignItems='center' 
                                    w='100%' 
                                    mb='2' 
                                    px='2' 
                                    justify='space-between'
                                >
                                    <Icon 
                                        as={SiFacebook} 
                                        color='facebook.500' 
                                        fontSize='4xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
                                    <Icon 
                                        as={FcGoogle} 
                                        color='facebook.500' 
                                        fontSize='4xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
    
                                    <Icon 
                                        as={SiDiscord} 
                                        color='white' 
                                        fontSize='4xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
    
                                    <Icon 
                                        as={SiTwitch} 
                                        color='purple.400' 
                                        fontSize='3xl' 
                                        _hover={{
                                            cursor: 'pointer',
                                            filter: 'brightness(0.7)',
                                            transition: 'all 0.2s'
                                        }}
                                    />
                                </Flex>     
                                <Text color='whiteAlpha.700'> Não possui uma conta? 
                                    <Link href='/signup' passHref>
                                        <ChakraLink color='purple.400' ml='1'>Registrar-se</ChakraLink>
                                    </Link>
                                </Text>                   
                            </Flex>
                        </Flex>
                    </Flex>
    
                </Stack>
            </Flex>
        )
    }
}
