import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, ContentHeader, ContentBody, ContentFooter, Title, Description, ViewButton } from './styles';
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocialFacebook } from '../../components/ButtonSocialFacebook/ButtonSocialFacebook';

const Login: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <ContentHeader>
                    <Title>Bem-vindo(a) ao {"\n"}App Construtora</Title>
                    <Description>Entre com as redes sociais</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialFacebook title="Facebook" />
                        
                    </ViewButton>
                </ContentHeader>
                <ContentBody />
                <ContentFooter />
            </Container>
        </SafeAreaView>
    );
}

export { Login };
