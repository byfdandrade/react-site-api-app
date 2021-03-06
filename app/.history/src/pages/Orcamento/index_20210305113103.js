import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, TitleInput } from "./styles";

export default function Orcamento() {
    const navigation = useNavigation();
    return (
        <Container>
            <TitleInput>
                Orçamento
        </TitleInput>
        </Container>

    );
}
