import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function FeatureItem({ children, Icon, ...rest }) {
    return (
        <HStack {...rest} spacing='24px'>
            <Icon boxSize='48px' />
            <Text textAlign='left' fontSize='18px' fontWeight='700'>{children}</Text>
        </HStack>
    )
}
