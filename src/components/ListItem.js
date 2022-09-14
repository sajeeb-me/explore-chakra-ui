import React from 'react'
import { HStack, Icon, Text } from '@chakra-ui/react';
import CheckIcon from '../icons/Icon';

export default function ListItem(props) {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px' />
            <Text textAlign='left'>{children}</Text>
        </HStack>
    )
}
