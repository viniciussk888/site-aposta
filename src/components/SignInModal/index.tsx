import { Button, FormControl, FormLabel, Heading, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"
import Router from 'next/router';

export const SignInModal = ({ isOpenModal, setIsOpenModal }) => {

    const initialRef = React.useRef()

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpenModal}
                onClose={() => setIsOpenModal(false)}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Stack align={'center'}>
                            <Heading fontSize={'2xl'}>
                                Faça login em sua conta</Heading>
                            <Text fontSize={'sm'} color={'gray.600'}>
                                para desfrutar de todos os nossos <Link color={'primary.500'}>recursos</Link> ✌️
                            </Text>
                        </Stack>

                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Senha</FormLabel>
                                <Input type="password" />
                            </FormControl>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={()=>Router.push('/home')} isFullWidth backgroundColor='primary.500' colorScheme='primary.500' mr={3}>
                            ENTRAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}