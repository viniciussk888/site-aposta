import { Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiShoppingCart2Line,RiFileList3Line, RiHome2Line, RiHandCoinLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav () {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiHome2Line} href="/home">Home</NavLink>
       {/*  <NavLink icon={RiFileCopy2Line} href="/dashboard">Dashboard</NavLink> */}
        <NavLink icon={RiShoppingCart2Line} href="/#">Dicas</NavLink>
      </NavSection>
      <NavSection title="ANÁLISE">
        <NavLink icon={RiHandCoinLine} href="/#">Análises</NavLink>
        <NavLink icon={RiFileList3Line} href="/#">Jogos</NavLink>
      </NavSection>
    </Stack>
  )
}