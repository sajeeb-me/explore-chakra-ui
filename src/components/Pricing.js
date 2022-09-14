import React from 'react'
import { Box, Flex, Text, Heading, Button, Stack } from '@chakra-ui/react';
import ListItem from './ListItem';

export default function Pricing() {
    return (
        <Box maxW='994px' margin='auto' mt='-256px' borderRadius='12px' overflow='hidden' boxShadow='xl'>
            <Flex>
                <Box bg='#F0EAFB' p='60px'>
                    <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
                    <Heading as='h3' fontSize='60px' mt='16px'>$329</Heading>
                    <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
                    <Button colorScheme='purple' size='lg' w='282px' mt='24px'>Get Started</Button>
                </Box>
                <Box p='60px' fontSize='18px' bg='white'>
                    <Text textAlign='left'>
                        Access these features when you this pricing package for your business.
                    </Text>
                    <Stack as='ui' spacing='20px' pt='24px'>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>International calling and messaging API</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}
