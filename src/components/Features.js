import { Box, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { HassleFreeIcon, MoneyBackGuaranteeIcon, MonthlySubscriptionIcon } from '../icons/IconCollection'
import FeatureItem from './FeatureItem'

export default function Features() {
    return (
        <Box maxW='1024px' m='auto' pt='60px' pb='8'>
            <Flex px='12' spacing='5' direction={['column', 'column', 'row']}>
                <FeatureItem Icon={MoneyBackGuaranteeIcon}>
                    30 days money back Guarantee.
                </FeatureItem>
                <FeatureItem Icon={HassleFreeIcon}>
                    No setup fees 100% hassle free.
                </FeatureItem>
                <FeatureItem Icon={MonthlySubscriptionIcon}>
                    No monthly subscription Pay once and for all.
                </FeatureItem>
            </Flex>
        </Box>
    )
}
