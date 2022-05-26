import { Text } from "@chakra-ui/react";

export function Logo () {
  return (
    <Text
      fontSize={['lg', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      ⚽ Automa
      <Text as="span" ml="1" color="primary.500">Bet</Text>
    </Text>
  )
}
