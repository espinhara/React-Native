import React, { useMemo } from 'react';

import { Image } from 'react-native';

import Logo from '../../assets/logo.png';

import {
    Container
} from './styles';

export default function Footer() {
    return (
        <Container>
            <Image source={Logo}/>
        </Container>
    );
}
