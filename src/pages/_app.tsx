import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "../styles/theme";
import { Layout } from "../styles/layout";
import { LayoutLogged } from "../styles/layoutLogged";
import { AlertProvider } from "../contexts/AlertContext";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <AlertProvider>
          <Component {...pageProps} />
        </AlertProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
