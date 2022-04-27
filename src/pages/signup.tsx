/* eslint-disable jsx-a11y/alt-text */

//Next
import Link  from "next/link";

//Icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { SiDiscord, SiFacebook, SiTwitch } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

//Chakra
import { Stack, Flex, Text, Image, useBreakpointValue, Heading, Box, Icon } from "@chakra-ui/react";

//Components
import { Input } from "../components/Form/input";
import { Logo } from "../components/Logo";
import { ButtonSimple } from "../components/Button/ButtonSimple";

//Form
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";

//Interface Result Form
interface SignUpFormData{
    name: string,
    email: string,
    password: string
}

//Config Form Validations
const signUpFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
})

export default function SignUp() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signUpFormSchema)
    })

    const handleSignUp: SubmitHandler<SignUpFormData> = async (values, event) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values)
    }
    
    if(isWideVersion){
        return (
            <Flex
                w='100vw'
                h='100vh'
                align='center'
                justify='space-between'
            >    
                <Stack direction='row'>    
                    <Image src='/hubImage.png' h='100vh' maxW='50%' />                                    
    
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
                                onSubmit={handleSubmit(handleSignUp)}
                            >    
                                <Heading 
                                    mr='auto' 
                                    ml='6' 
                                    fontSize='5xl' 
                                    fontWeight='normal' 
                                    color='whiteAlpha.500'
                                >Registrar no</Heading>

                                <Logo justify='end' w='100%' fontSize={'3xl'}/>
                                
                                <Text 
                                    mb='2' 
                                    as='span' 
                                    color='whiteAlpha.500' 
                                    maxW={320} 
                                    textAlign='center' 
                                    fontSize='xl'
                                >
                                    Insira suas informações abaixo ou com uma conta social.
                                </Text>

                                <Flex 
                                    alignItems='center' 
                                    w='100%' 
                                    my='2' 
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

                                <Box w='100%'>
                                    <Input 
                                        name="name" 
                                        label="Nome" 
                                        error={formState.errors.name}
                                        {...register('name')}
                                    ></Input>

                                    <Input 
                                        name="email" 
                                        type='email'
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
                                    
                                </Box>
                                
                                <Flex justifyContent='space-between' w='110%'>
                                    <Link href="/login" passHref>
                                        <Box w='40%'>
                                            <ButtonSimple w='100%' inverted>
                                                Logar
                                            </ButtonSimple>
                                        </Box>
                                    
                                    </Link>

                                    <ButtonSimple 
                                        w='40%' 
                                        type="submit"
                                        isLoading={formState.isSubmitting}
                                    >
                                        Registrar <Icon ml='1' as={HiOutlineArrowNarrowRight}></Icon>
                                    </ButtonSimple>
                                </Flex>
    
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
                                onSubmit={handleSubmit(handleSignUp)}
                            >

                                <Heading 
                                    mr='auto' 
                                    ml='6' 
                                    fontSize='5xl' 
                                    fontWeight='normal' 
                                    color='whiteAlpha.500'
                                >Registrar no</Heading>

                                <Logo justify='end' w='100%' fontSize={'3xl'}/>
                                
                                <Text 
                                    mb='2' 
                                    as='span' 
                                    color='whiteAlpha.500' 
                                    maxW={320} 
                                    textAlign='center' 
                                    fontSize='xl'
                                >
                                    Insira suas informações abaixo ou com uma conta social.
                                </Text>

                                <Flex 
                                    alignItems='center' 
                                    w='100%' 
                                    my='2' 
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

                                <Input 
                                    name="name" 
                                    label="Nome" 
                                    error={formState.errors.name}
                                    {...register('name')}
                                ></Input>

                                <Input 
                                    name="email" 
                                    type='email'
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
                                                                  
                                <Flex justifyContent='space-between' w='110%'>
                                    <Link href="/login" passHref>
                                        <Box w='40%'>
                                            <ButtonSimple w='100%' inverted>
                                                Logar
                                            </ButtonSimple>
                                        </Box>
                                    
                                    </Link>

                                    <ButtonSimple 
                                        w='40%' 
                                        type="submit"
                                        isLoading={formState.isSubmitting}
                                    >
                                        Registrar <Icon ml='1' as={HiOutlineArrowNarrowRight}></Icon>
                                    </ButtonSimple>
                                </Flex>        
                            </Flex>
                        </Flex>
                    </Flex>
    
                </Stack>
            </Flex>
        )
    }
}
