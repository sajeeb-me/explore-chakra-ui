import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Header() {
    return (
        <Box as='section' pb='28'>
            <Box color='gray.50' bg='purple.600' pt='90px' pb='198px' px='8' textAlign={['left', 'left', 'center']}>
                <Heading
                    fontWeight='extrabold'
                    fontSize={['3xl', '3xl', '5xl']}
                >
                    Simple pricing for your business
                </Heading>
                <Text
                    fontWeight='medium'
                    fontSize={['lg', 'lg', '2xl']}
                    pt='4'
                >
                    Plans that are carefully crafted for your business.
                </Text>
            </Box>
        </Box>
    )
}
