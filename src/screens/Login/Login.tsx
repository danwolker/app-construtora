import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Form } from "@unform/mobile"; // 📌 Importação do Form do Unform
import Input from "../../components/Input/Input";
import { Container, ContentHeader, ContentBody, ContentFooter, Title, Description, ViewButton } from "./styles";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook/ButtonSocialFacebook";

const Login: React.FC = () => {
  const formRef = useRef(null); // 📌 Criando um ref para o Form

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

        <ContentBody>
          {/* 📌 Agora os inputs estão dentro de um <Form> */}
          <Form ref={formRef} onSubmit={(data) => console.log(data)}>
            <Input name="email" placeholder="Digite seu e-mail" keyboardType="email-address" />
            <Input name="password" placeholder="Digite sua senha" secureTextEntry />
          </Form>
        </ContentBody>

        <ContentFooter />
      </Container>
    </SafeAreaView>
  );
};

export { Login };
