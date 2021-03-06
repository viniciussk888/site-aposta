import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { BannerCardsHome } from "../components/BannerCardsHome";
import { BannerHome } from "../components/BannerHome";
import { BannerServices } from "../components/BannerServices";
import { Footer } from "../components/Footer";
import { Layout } from "../styles/layout";

export default function Home() {
  return (
    <Layout>
      <BannerHome />
      <Box bg='gray.50' paddingInline={20}>
        <BannerCardsHome />
      </Box>
      <BannerServices />
      <Footer />
    </Layout>
  );
}
