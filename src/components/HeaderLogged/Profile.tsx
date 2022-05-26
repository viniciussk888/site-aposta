import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ProfileProps {
  showProfileData?: boolean
}


export function Profile({ showProfileData = true }: ProfileProps) {

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text fontWeight='bold'>Armando Jr</Text>
          <Text color="gray.600" fontSize="small">armanpin18@gmail.com</Text>
        </Box>
      )}

      <Avatar backgroundColor='primary.500' color='white' size="md" name='Armando Jr' />
    </Flex>
  )
}