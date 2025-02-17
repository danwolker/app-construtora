import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { ImageRequireSource } from "react-native";
import { Button, IconeGoogle, Title } from "./styles";

// Importação da imagem corrigida usando require para evitar erro de módulo
const PngGoogle: ImageRequireSource = require("../../images/icongoogle.png");

interface ButtonSocialGoogleProps extends RectButtonProps {
  title: string;
}

const ButtonSocialGoogle: React.FC<ButtonSocialGoogleProps> = ({ title, ...rest }) => {
  return (
    <Button {...rest}>
      <IconeGoogle source={PngGoogle} resizeMode="contain" />
      <Title>{title}</Title>
    </Button>
  );
};

export { ButtonSocialGoogle };
