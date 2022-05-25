import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

export const Layout = ({ children }) => {
    return (
        <Box>
            <Head>
                <title>AutomaBet</title>
            </Head>
            <Header />
            <Box>
                {children}
            </Box>
        </Box>
    );
}
