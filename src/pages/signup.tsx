import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Cadastre-se
                    </Heading>
                    <Text fontSize={'md'} color={'gray.600'}>
                        e aproveite todos os nossos recursos ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>Nome</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel>Sobrenome</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="document" isRequired>
                            <FormLabel>CPF</FormLabel>
                            <Input type="number" />
                        </FormControl>
                        <FormControl id="phone" isRequired>
                            <FormLabel>Telefone</FormLabel>
                            <Input type="tel" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Senha</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Confirme sua senha</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'primary.500'}
                                color={'white'}
                                _hover={{
                                    bg: 'orange.500',
                                }}>
                                Cadastrar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}