import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { ImageRequireSource } from "react-native";
import { Button, IconFacebook,Title } from "./styles";

// Importação da imagem corrigida usando require para evitar erro de módulo
const PngFacebook: ImageRequireSource = require("../../images/iconfacebook.png");

interface ButtonSocialFacebookProps extends RectButtonProps {
  title: string;
}

const ButtonSocialFacebook: React.FC<ButtonSocialFacebookProps> = ({ title, ...rest }) => {
  return (
    <Button {...rest}>
      <IconFacebook source={PngFacebook} resizeMode="contain" />
      <Title>{title}</Title>
    </Button>
  );
};

export { ButtonSocialFacebook };
