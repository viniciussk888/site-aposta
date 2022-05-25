import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcPositiveDynamic, FcDonate, FcApproval } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export const BannerCardsHome = () => {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FcPositiveDynamic} w={10} h={10} />}
                    title={'Aumente sua assertividade'}
                    text={
                        'A plataforma irá te ajudar a fazer entradas no mercado de escanteios somente nos jogos que estão no padrão.'
                    }
                />
                <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={'Aprenda a gerir sua banca'}
                    text={
                        'Seguindo a análise da nosssa plataforma, você irá controlar suas entradas evitando perder dinheiro em entradas sem valor.'
                    }
                />
                <Feature
                    icon={<Icon as={FcApproval} w={10} h={10} />}
                    title={'Métodos já validado'}
                    text={
                        'Utilizando nossa plataforma, você trabalha com um métodos já validados por experietes profissinais da área.'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}