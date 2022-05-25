import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "../styles/theme";
import { Layout } from "../styles/layout";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
