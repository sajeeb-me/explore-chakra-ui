import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function FeatureItem({ children, Icon, ...rest }) {
    return (
        <HStack {...rest} spacing='6'>
            <Icon boxSize='12' />
            <Text textAlign='left' fontSize='lg' fontWeight='bold'>{children}</Text>
        </HStack>
    )
}
