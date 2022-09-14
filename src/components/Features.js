import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { HassleFreeIcon, MoneyBackGuaranteeIcon, MonthlySubscriptionIcon } from '../icons/IconCollection'
import FeatureItem from './FeatureItem'

export default function Features() {
    return (
        <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
            <HStack px='48px' spacing='20px'>
                <FeatureItem Icon={MoneyBackGuaranteeIcon}>
                    30 days money back Guarantee.
                </FeatureItem>
                <FeatureItem Icon={HassleFreeIcon}>
                    No setup fees 100% hassle free.
                </FeatureItem>
                <FeatureItem Icon={MonthlySubscriptionIcon}>
                    No monthly subscription Pay once and for all.
                </FeatureItem>
            </HStack>
        </Box>
    )
}
