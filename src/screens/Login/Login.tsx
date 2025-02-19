import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Container, ContentHeader, ContentBody, ContentFooter, Title, Description, ViewButton, SubDescription } from "./styles";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook/ButtonSocialFacebook";

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async () => {
    const data = formRef.current?.getData();
    console.log(data);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ContentHeader>
         <Title>Bem-vindo(a) ao {"\n"}App Construtora</Title>
         <Description>Entre com seu e-mail e senha</Description>
        </ContentHeader>

        <ContentBody>
          <Form ref={formRef} onSubmit={(data) => console.log(data)}>
            <Input 
              name="email"
              label="Email, CPF ou CNPJ"
              placeholder="Digite seu e-mail, CPF ou CNPJ"
              keyboardType="email-address"
              iconName="mail"
            />
            <Input
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              secureTextEntry
              iconName="lock-closed"
            />
          </Form>
          <Button title="Sign In" onPress={handleSubmit} />

          
        </ContentBody>
      
          <SubDescription>Entre com as redes sociais</SubDescription>
          <ViewButton>
            <ButtonSocialGoogle title="Google" />
            <ButtonSocialFacebook title="Facebook" />
          </ViewButton>

        <ContentFooter />
      </Container>
    </SafeAreaView>
  );
};

export { Login };
