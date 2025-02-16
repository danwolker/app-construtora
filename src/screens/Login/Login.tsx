import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, ContentHeader, ContentBody, ContentFooter, Title, Description, ViewButton } from './styles';

const Login: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <ContentHeader>
                    <Title>Bem-vindo(a) ao {"\n"}App Construtora</Title>
                    <Description>Entre para continuar</Description>
                    <ViewButton />
                </ContentHeader>
                <ContentBody />
                <ContentFooter />
            </Container>
        </SafeAreaView>
    );
}

export { Login };
