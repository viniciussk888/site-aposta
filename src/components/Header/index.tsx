import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa'

export const Header = () => {
  const [isWideVersion, setIsWideVersion] = useState(true)
  const breakPointCheck = useBreakpointValue({
    sm: false,
    md: true,
    lg: true,
    xl: true,
  })
  useEffect(() => {
    setIsWideVersion(breakPointCheck)
  }, [breakPointCheck])

  return (
    <Box>
      <Flex
        w='100%'
        bgGradient='linear(to-t, transparent, gray.500)'
        color={'white'}
        h={'80px'}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex flex={1} justify='start'>
          <Text
            textAlign='left'
            fontFamily={'heading'}>
            <img width='180px' src="./images/logo.svg" alt="AutomaBet" />
          </Text>

          <Flex display='flex' ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={0}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            fontSize={'sm'}
            fontWeight='bold'
            backgroundColor='primary.500'
            colorScheme='primary.500'
            color='white'
          >
            FAÇA LOGIN
          </Button>
        </Stack>
      </Flex>
    </Box >
  );
}

const DesktopNav = () => {

  return (
    <Stack direction={'row'} alignItems='center' spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={900}
                mr={4}
                color='white'
                _hover={{
                  textDecoration: 'none',
                  color: 'gray.100',
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

interface NavItem {
  label: string;
  icon?: string;
  href?: string;
  index?: number;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'CADASTRO',
    href: '#',
  },
];