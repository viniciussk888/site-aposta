import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { HeaderLogged } from "../components/HeaderLogged";
import { SideBar } from "../components/Sidebar";

export const LayoutLogged = ({ children }) => {
    return (
        <>
            <Head><title>AutomaBet</title></Head>
            <Flex direction="column" h="100vh">
                <HeaderLogged />

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <SideBar />
                    <Box flex={1} rounded={'lg'}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'lg'}
                        borderTop={'1px solid'}
                        borderTopColor='gray.100'
                        p={8}>
                        {children}
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}
