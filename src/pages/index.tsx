import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { BannerCardsHome } from "../components/BannerCardsHome";
import { BannerHome } from "../components/BannerHome";
import { BannerServices } from "../components/BannerServices";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <BannerHome />
      <Box bg='gray.50' paddingInline={20}>
        <BannerCardsHome />
      </Box>
      <BannerServices />
      <Footer />
    </Box>
  );
}
